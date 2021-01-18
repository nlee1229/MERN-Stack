const ProductController = require('../controllers/product.controller');

// when we go to /api, we want to run this index method in the controller
module.exports = function (app) {
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:id', PersonController.getAllProducts);
}