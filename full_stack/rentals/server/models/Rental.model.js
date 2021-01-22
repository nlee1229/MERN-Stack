const mongoose = require('mongoose'); // mongoose is importing the entire library from our node modules folder

const RentalSchema = new mongoose.Schema({
    address: {
        type: String,
        minlength: [10, "Address must be at least 10 characters"],
        required: [true, "You must have an address"]
    },
    imageUrl: {
        type: String,
        minlength: [10, "The image URL be at least 10 characters"],
        required: [true, "You must have an image URL"]
    },
    newConstruction: {
        type: Boolean,
        default: false
    },
    propertyType: {
        type: String,
        required: [true, "You must specify a property type"]
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// We need to use this schema to create a mongoose model
const Rental = mongoose.model('Rental', RentalSchema); // collection will be rentals

module.exports = Rental; 