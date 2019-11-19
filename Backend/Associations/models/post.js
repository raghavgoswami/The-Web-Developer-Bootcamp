var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

//return value for a file is what was Post
module.exports = mongoose.model("Post", postSchema);

