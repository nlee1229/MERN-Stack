const express = require('express'); // import Express library
const cors = require('cors');
const app = express(); // notice invoking the Express function

require("./server/config/mongoose.config"); // has to be above the 'require routes'


app.use(express.json()); // allows us to read data sent with the request
app.use(cors()); // alows other domains to make requests

require("./server/routes/pirates.routes")(app);

app.use(express.urlencoded({ extended: true })); //(MAYBE) allows us to access our API from front end to back using URLS - Eric

app.listen(8000, () =>
    console.log("You are now listening on port 8000"));