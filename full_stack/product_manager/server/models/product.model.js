const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be characters 3 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters long"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);

