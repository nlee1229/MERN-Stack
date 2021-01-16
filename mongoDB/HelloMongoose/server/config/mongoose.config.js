// In vs-code, navigate to the config folder where you will find the mongoose.config.js file where we use mongoose to connect to MongoDb. Mongoose has a super convenient connect method -- mongoose.connect!

const mongoose = require("mongoose");

// The useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal.
mongoose.connect("mongodb://localhost/newDb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));