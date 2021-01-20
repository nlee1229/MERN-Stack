const AuthorController = require('../controllers/author.controller');

module.exports = function (app) {
    app.post('/new', AuthorController.createAuthor);
    app.get('/', AuthorController.getAllAuthors);
}

