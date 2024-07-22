class Product {
    constructor(id, name, categoryId, saleDate, quantity, isDeleted) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.saleDate = saleDate;
        this.quantity = quantity;
        this.isDeleted = isDeleted;
    }
}

function InitProducts() {
    let listProduct = [
        new Product(1, "Product 1", 1, new Date("2024-07-19"), 10, true),
        new Product(2, "Product 2", 2, new Date("2024-07-20"), 5, false),
        new Product(3, "Product 3", 3, new Date("2024-07-21"), 0, true),
        new Product(4, "Product 4", 1, new Date("2024-07-22"), 6, false),
        new Product(5, "Product 5", 2, new Date("2024-07-23"), 7, true),
        new Product(6, "Product 6", 3, new Date("2024-07-24"), 0, false),
        new Product(7, "Product 7", 1, new Date("2024-07-25"), 2, true),
        new Product(8, "Product 8", 2, new Date("2024-07-26"), 3, false),
        new Product(9, "Product 9", 3, new Date("2024-07-27"), 11, true),
        new Product(10, "Product 10", 1, new Date("2024-07-28"), 0, false),
    ]

    return listProduct;
}

function fiterProductById(listProduct, id) {
    var product = listProduct.find(p => p.id == id);
    return product.name;
}

function fiterProductByIdWithForLoop(listProduct, id) {
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].id == id) {
            return listProduct[i].name;
        }
    }
}


function filterProductByQuantity(listProduct) {
    var products = listProduct.filter(p => p.quantity > 0 && !p.isDeleted);
    return products;
}

function filterProductByQuantityWithForLoop(listProduct) {
    var result = [];
    listProduct.forEach(p => {
        if(p.quantity > 0 && !p.isDeleted){
            result.push(p);
        }
    });
    return result;
}


function filterProductBySaleDate(listProduct) {
    let today = new Date();
    return listProduct
        .filter(p => p.saleDate > today && !p.isDeleted)
        .map(p => p.name);
};

function filterProductBySaleDateWithForLoop(listProduct){
    var result = [];
    let today = new Date();
    listProduct.forEach(p => {
        if(p.saleDate > today && !p.isDeleted){
            result.push(p.name);
        }
    });

    return result;
}

function totalProduct(listProduct) {
    return listProduct
        .filter(p => !p.isDeleted)
        .reduce((total, p) => total + p.quantity, 0);
};

function totalProductWithForLoop(listProduct) {
    var total = 0;
    listProduct.forEach(p => {
        if(!p.isDeleted){
            total += p.quantity;
        }
    });

    return total;
};

function isHaveProductInCategory(listProduct, categoryId) {
    return listProduct.some(p => p.categoryId == categoryId);
}

function isHaveProductInCategoryWithForLoop(listProduct, categoryId) {
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].categoryId == categoryId) {
            return true;
        }
    }

    return false;
}

function filterProductBySaleDateAndQuantity(listProduct) {
    let today = new Date();
    return listProduct
        .filter(p => p.saleDate > today && p.quantity > 0)
        .map(p => p.name);
};

function filterProductBySaleDateAndQuantityWithForLoop(listProduct){
    var result = [];
    let today = new Date();
    listProduct.forEach(p => {
        if(p.saleDate > today && p.quantity > 0){
            result.push(p.name);
        }
    });

    return result;
}


var listProduct = InitProducts();

console.log(fiterProductById(listProduct, 2));
console.log(fiterProductByIdWithForLoop(listProduct, 2));

console.log(filterProductByQuantity(listProduct));
console.log(filterProductByQuantityWithForLoop(listProduct));

console.log(filterProductBySaleDate(listProduct));
console.log(filterProductBySaleDateWithForLoop(listProduct));

console.log(totalProduct(listProduct));
console.log(totalProductWithForLoop(listProduct));

console.log(filterProductBySaleDateAndQuantity(listProduct));
console.log(filterProductBySaleDateAndQuantityWithForLoop(listProduct));




