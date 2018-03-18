function View(model) {
    this.model = model;
}

View.prototype.setElements = function() {
    this.header = document.getElementsByTagName('header')[0];
    this.main = document.getElementsByTagName('main')[0];
    this.footer = document.getElementsByTagName('footer')[0];
    this.hamburgerBtn = document.getElementsByClassName('hamburger')[0];
}

View.prototype.moveMenu = function() {
    let menu = document.getElementsByClassName('mainnav')[0];
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
        this.header.classList.remove('visible');
        this.header.classList.add('hidden');
    }
    else {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
        this.header.classList.remove('hidden');
        this.header.classList.add('visible');
    }
}

View.prototype.moveMain = function() {
    let menu = document.getElementsByClassName('mainnav')[0];
    if (menu.classList.contains('visible')) {
        this.main.classList.remove('visible');
        this.main.classList.add('hidden');
    }
    else {
        this.main.classList.remove('hidden');
        this.main.classList.add('visible'); 
    }
}

View.prototype.moveFooter = function() {
    let menu = document.getElementsByClassName('mainnav')[0];
    console.log(menu.classList);
    if (menu.classList.contains('visible')) {
        this.footer.classList.remove('hidden');
        this.footer.classList.add('visible');
    }
    else {
        this.footer.classList.remove('visible');
        this.footer.classList.add('hidden'); 
    }
}

View.prototype.menuShouldToggle = function(e) {
    let header = document.getElementsByTagName('header')[0];
    return !header.contains(e.target) && !e.target.classList.contains('hamburger') && document.getElementsByClassName('mainnav')[0].className != 'mainnav' && document.getElementsByClassName('mainnav')[0].classList.contains('visible');
}

View.prototype.setEventListeners = function() {
    this.hamburgerBtn.addEventListener('click', function() {
        this.moveMenu();
        this.moveMain();
        this.moveFooter();
    }.bind(this));
    
    document.body.addEventListener('click', function(e) {
        if (!this.menuShouldToggle(e)) {
                return;
        }
        e.preventDefault();
        this.moveMenu();
        this.moveMain();
        this.moveFooter();
        return false;
    }.bind(this));
    
    document.getElementsByTagName('header')[0].addEventListener('click', function(e) {
        if (e.target.tagName == 'A' && document.body.clientWidth < 768) {
            this.moveMenu();
            this.moveMain();
            this.moveFooter();
        }
        return true;
    }.bind(this));
}

View.prototype.init = function() {
    this.setElements();
    this.setEventListeners();
}

module.exports = {
    View: View
}