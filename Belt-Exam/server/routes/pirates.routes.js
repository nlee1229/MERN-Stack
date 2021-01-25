const routesCtl = require('../controllers/pirates.controller');

module.exports = app => {
    app.get('/api/pirates', routesCtl.getAllPirates);
    app.post('/api/pirates', routesCtl.createPirate);
    app.delete('/api/pirates/:pirateId', routesCtl.deletePirate);
    app.get('/api/pirates/:pirateId', routesCtl.getOnePirate);
}