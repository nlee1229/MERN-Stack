const { Author } = require('../models/author.model');

module.exports.home = (request, response) => {
    response.json({
        message: "Authors is working!"
    });
}

// --------- create a new author --------- //
module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

// --------- find an author ---------- //
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}


