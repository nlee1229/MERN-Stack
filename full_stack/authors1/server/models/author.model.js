const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
}, { timestamps: true });

// author is going to be the table name. AUthor is the key to the value of our schema
// Author is the collection and the documents are being created in the AuthorSchema
module.exports.Author = mongoose.model("Author", AuthorSchema);
