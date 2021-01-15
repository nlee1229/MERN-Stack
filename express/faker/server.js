// We have this special function called require that will bring in all the code from express library
const express = require('express');

// create application
// creating a var called app, then setting it = invoking the express function
const app = express();

app.use(express.json()); // allow us to access the incoming data with each request (VERY IMPORTANT)--- ADD THIS TOWARDS TOP

app.get('/', (request, response) => {
    console.log(request);
    // response.send('Hello!');
    response.json({
        hello: 'world'
    });
});

// handle a post request
app.post('/', (req, res) => {
    console.log(req.body); // trying to see the incoming data
    res.json({
        posted: true
    });
})

// try out put requests!
// try out delete requests!

// we want to receive requests, then we need to invoke a special method on this app object
app.listen(8000, () => console.log('listening on port 8000'));