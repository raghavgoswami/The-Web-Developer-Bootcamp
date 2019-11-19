var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
	username: String, 
	password: String
});

userSchema.plugin(passportLocalMongoose); //takes the passport local mongoose pkg required and add a bunch of methods that come with the pkg to userSchema for user auth

module.exports = mongoose.model("User", userSchema);