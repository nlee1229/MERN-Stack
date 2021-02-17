const LoginController = require('../controllers/User.controller');
module.export = function (app) {
    app.get('/api', LoginController.index);
}