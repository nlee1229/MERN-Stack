const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name must be at least 3 characters"],
        required: [true, "You must have a name"]
    },
    imageUrl: {
        type: String,
        minlength: [10, "The image URL must be at least 10 characters"],
        required: [true, "You must have an image URL"]
    },
    treasure: {
        type: Number,
        required: [true, "You must specify a treasure chest amount"]
    },
    catchPhrase: {
        type: String,
        minlength: [5, "The catch phrase must be at least 5 characters"],
        required: [true, "You must have a catch phrase"]
    },
    crewPosition: {
        type: String,
        required: [true, "You must specify a position"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;