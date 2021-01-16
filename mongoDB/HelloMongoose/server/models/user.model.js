const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		first_name: {
			type: String,
			required: [true, "First name is required"],
			minlength: [6, "First name must be at least 3 characters long"]
		},
		last_name: {
			type: String,
			required: [true, "Last name is required"],
			minlength: [6, "Last name must be at least 6 characters long"]
		},
		age: {
			type: Number,
			min: [1, "You must be at least 1 or older to register"],
			max: [169, "You must be at most 169 years old to register"]
		},
		email: { type: String, required: [true, "Email is required"] }
	},
	{ timestamps: true }

);

const User = mongoose.model("User", UserSchema);

module.exports = User;

// This is where we create a User collection using mongoose. Once again, we need to import mongoose using the require statement at the top of the file