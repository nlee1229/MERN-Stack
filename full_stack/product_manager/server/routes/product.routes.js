const ProductController = require('../controllers/product.controller');

// when we go to /api, we want to run this index method in the controller
module.exports = function (app) {
    app.get('/api', ProductController.index);
    // ----- PATH TO CREATE NEW PRODUCT ----- //
    app.post('/api/products', ProductController.createProduct);
    // ----- PATH TO SHOW ALL PRODUCTS ----- //
    app.get('/api/products', ProductController.getAllProducts);
    // ----- PATH TO SHOW ONE PRODUCT BY ID ----- //
    app.get('/api/products/:id', ProductController.getProduct);
}