const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true })); // allow us to access the incoming data with each request (VERY IMPORTANT)--- ADD THIS TOWARDS TOP

// This is where we import the jokes routes function from our jokes.routes.js file
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));