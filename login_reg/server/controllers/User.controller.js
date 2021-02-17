const { request } = require('express');
const User = require('../models/User.model');

register: (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
}

// Let's look at what we are doing. On registration, we created a new user with the data passed from the request via request.body. Then, we tried to save it. If the save was successful, we sent back a success message, along with the user instance. If it was not, then we sent the error as a response.