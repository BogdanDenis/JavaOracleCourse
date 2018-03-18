String.prototype.removeHTML = function() {
    let str = this;
    let openBrackets = ['<p>', '<ul>', '<li>', '<a>'];
    let closeBrackets = ['</p>', '</ul>', '</li>', '</a>'];
    for (let i = 0; i < openBrackets.length; i++) {
        str = str.replace(openBrackets[i], '');
    }
    for (let i = 0; i < closeBrackets.length; i++) {
        str = str.replace(closeBrackets[i], '');
    }
    return str;
}


/*========
    Home model
========*/

function HomeModel() {
    this.bannersData = {};
    this.productsData = {};
    this.posts = {};
}

HomeModel.prototype.getBannersData = function() {
    let self = this;
    return new Promise(function(resolve) {
        $.getJSON("db/banners.json", function(data){
            resolve(data);
        });
    });
}

HomeModel.prototype.getProductsData = function() {
    let self = this;
    return new Promise(function(resolve) {
        $.getJSON("db/products.json", function(data){
            resolve(data);
        });
    });
}

HomeModel.prototype.getPostsData = function() {
    let self = this;
    return new Promise(function(resolve) {
        $.getJSON("db/blog-posts.json", function(data){
            resolve(data);
        });
    });
}

HomeModel.prototype.getData = function() {
    var Data = {
        "banners": [],
        "products": [],
        "posts": []
    };
    var self = this;
    return new Promise(function(resolve) {
        self.getBannersData()
            .then(function(val) {
                Data.banners = val.banners;
                self.getProductsData()
                    .then(function(val) {
                        Data.products = val.newArrivals;
                        self.getPostsData()
                            .then(function(val) {
                                Data.posts = val.posts;
                                for (let i = 0; i < Data.posts.length; i++) {
                                    Data.posts[i].preview = Data.posts[i].text.slice(0, 100).removeHTML() + '...';
                                }
                                Data.posts = val.posts;
                                resolve(Data);
                            });
                    });
            });
    });
}

module.exports = {
    HomeModel: HomeModel
}
