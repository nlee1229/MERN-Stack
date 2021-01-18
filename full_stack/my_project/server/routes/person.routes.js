const PersonController = require('../controllers/person.controller');

// when we go to /api, we want to run this index method in the controller
module.exports = function (app) {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);
}