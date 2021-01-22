const routesCtl = require('../controllers/rentals.controller');

module.exports = app => {
    app.get('/api/rentals', routesCtl.getAllRentals);
    app.post('/api/rentals', routesCtl.createRental); // coming from the create Rental in controller
    app.post('/api/rentals/:rentalId/likes', routesCtl.addLike);
    app.delete('/api/rentals/:rentalId', routesCtl.deleteRental);
    app.get('/api/rentals/:rentalId', routesCtl.getOneRental);
    // update a single rental
    app.put('/api/rentals/:rentalId', routesCtl.updateRental);
}