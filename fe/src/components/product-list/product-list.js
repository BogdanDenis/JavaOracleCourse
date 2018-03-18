function RugsModel() {
    
}

RugsModel.prototype.getPreviewData = function() {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            for (let i = 0; i < Data.products.length; i++) {
                if (Data.products[i]["rugs"] !== undefined)
                    resolve(Data.products[i]["rugs"]);
            }
        });
    });
}

RugsModel.prototype.getData = function(link) {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            for (let i = 0; i < Data.products.length; i++) {
                if (Data.products[i]["rugs"] !== undefined) {
                    let products = Data.products[i]["rugs"].products;
                    for (let j = 0; j < products.length; j++) {
                        if (products[j].link == link)
                            resolve(products[j]);
                    }
                }
            }
        });
    });
}

function LinenCurtainsModel() {
    
}

LinenCurtainsModel.prototype.getPreviewData = function() {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            resolve(Data["linen-curtains"]);
        });
    });
}

LinenCurtainsModel.prototype.getData = function() {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            for (let i = 0; i < Data.products.length; i++) {
                let products = Data.products[i]["linen-curtains"].products;
                    for (let j = 0; j < products.length; j++) {
                        if (products[j].link == link)
                            resolve(products[j]);
                    }
            }
        });
    });
}

function LinenBeddingModel() {
    
}

LinenBeddingModel.prototype.getPreviewData = function() {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            resolve(Data["linen-bedding"]);
        });
    });
}

LinenBeddingModel.prototype.getData = function() {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            for (let i = 0; i < Data.products.length; i++) {
                if (Data.products[i]["linen-bedding"] !== undefined)
                    resolve(Data.products[i]["linen-beddig"].products);
            }
        });
    });
}

function LivingModel() {
    
}

LivingModel.prototype.getPreviewData = function() {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            resolve(Data["living"]);
        });
    });
}

LivingModel.prototype.getData = function() {
    return new Promise(function(resolve) {
        $.getJSON('db/products.json', function(Data) {
            for (let i = 0; i < Data.products.length; i++) {
                if (Data.products[i]["living"] !== undefined)
                    resolve(Data.products[i]["living"].products);
            }
        });
    });
}

module.exports = {
    RugsModel: RugsModel,
    LinenCurtainsModel: LinenCurtainsModel,
    LinenBeddingModel: LinenBeddingModel,
    LivingModel: LivingModel
}
