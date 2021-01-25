const { request } = require('express');
const Pirate = require('../models/Pirate.model');

module.exports.getAllPirates = (req, res) => {
    Pirate.find({}).sort({ name: 1 })
        .then(allPirates => res.json(allPirates))
        .catch(err => res.json(err));
}

module.exports.createPirate = (req, res) => {
    console.log("This is the request body", req.body);
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.findByIdAndDelete(req.params.pirateId)
        .then(() => res.json({ success: true }))
}

module.exports.getOnePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.pirateId })
        .then(retrievedPirate => res.json(retrievedPirate))
}

