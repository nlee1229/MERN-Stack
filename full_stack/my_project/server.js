const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config'); //came in after filling out models

app.use(cors());
app.use(express.json()); //came in after filling out models
app.use(express.urlencoded({ extended: true })); //came in after filling out models
require('./server/routes/person.routes')(app);

app.listen(8000, () => {
    console.log("You are now listening at port 8000");
})