mongoose = require("mongoose");

//USER - e-mail, name 
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Post"
	}] //array of posts - embedded data to create an association between 2 mongo models 
});

module.exports = mongoose.model("User", userSchema);