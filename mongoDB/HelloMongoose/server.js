// We have this special function called require that will bring in all the code from express & mongoose library
const mongoose = require('mongoose');
// create application... creating a var called app, then setting it = invoking the mongoose function
// const app = mongoose();
const express = require("express");
const app = express();


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true })); // allow us to access the incoming data with each request (VERY IMPORTANT)--- ADD THIS TOWARDS TOP

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
