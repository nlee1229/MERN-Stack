const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "This is working!"
    });
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// retrieve all products in database
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err));
}

// shows us the details of one particular person
module.exports.getProduct = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}