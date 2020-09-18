const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
        // create a new product using our contructor in our Model
    const product = new Product(req.body.title)
        // now save that product onto our products array for now using save()
    product.save()
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll()
    res.render('shop', {
        products: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};
