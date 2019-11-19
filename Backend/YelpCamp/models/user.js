var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
userSchema = new mongoose.Schema({
	username: String,
	password: String
});
//passport plugin
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);