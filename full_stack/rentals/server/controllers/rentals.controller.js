const { request } = require('express');
const Rental = require('../models/Rental.model');

// CRUD for our rentals
// get all of the properties
module.exports.getAllRentals = (req, res) => {
    Rental.find() // this retur ns a promise!
        .then(allRentals => res.json(allRentals)) // allRentals = response.data
        .catch(err => res.json(err)); // in case of errors
}

// create new rental
module.exports.createRental = (req, res) => {
    // our request should have a body if we did things correctly
    console.log('This is the request body', req.body);
    Rental.create(req.body) // returns a promise as well
        .then(newProperty => res.json({ property: newProperty }))
        .catch(err => res.status(400).json(err));
}

// adds like to a rental
module.exports.addLike = (request, response) => {
    // request.params is an object
    console.log('request.params is this object', request.params);
    Rental.findByIdAndUpdate(
        //The id has to match whatever is the id in the routes file
        request.params.rentalId,
        {
            $inc: {
                likes: 1
            }
        },
        {
            new: true // asking for the updated document
        }
    ) // returns a promise!
        .then(updatedRental => response.json(updatedRental)) // send back to the client
        .catch(err => response.json(err))
}

// delete a rental
module.exports.deleteRental = (req, res) => {
    // id comes from req.params
    Rental.findByIdAndDelete(req.params.rentalId)
        .then(() => res.json({ success: true }))
}

// get one rental and update
module.exports.getOneRental = (req, res) => {
    Rental.findOne({ _id: req.params.rentalId })
        .then(retrievedRental => res.json(retrievedRental))
}

// edit rental
module.exports.updateRental = (req, res) => {
    Rental.findByIdAndUpdate(
        req.params.rentalId,
        req.body, // this is the data from the request
        {
            new: true,
            runValidators: true
        }
    )
        .then(updatedRental => res.json(updatedRental))
        .catch(err => res.status(400).json(err))
}