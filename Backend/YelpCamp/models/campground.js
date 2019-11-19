var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   author: {
	   id: {
	   		type: mongoose.Schema.Types.ObjectId,
		    ref: "User"
		},
		   username: String
   	},
	//array of commend IDs (Object ID references)
   comments: [
	   {
			type: mongoose.Schema.Types.ObjectId,
	   		ref: "Comment" //name of model
   	   }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);
