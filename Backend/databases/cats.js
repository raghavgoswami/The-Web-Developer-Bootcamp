var mongoose = require("mongoose");
//connect mongoose to server running mongod. cat_app is the name of the db. if it doesn't exist then it'll create it.
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true});
// to deal with deprecation warnings 
mongoose.set('useUnifiedTopology', true);
// define what a cat looks like - defining a flexible pattern for our data. provides some predictable structure in order to write code to handle cat
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});
//compile catSchema, a pattern, into a model (contains methods for CRUD) and saved that to Cat var used to CRUD cats.
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the database step 1: create a cat instance and save to var george
 
// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

//step 2: add contents of george to db - may not save e.g. if mongo process not running, internet not working, etc.
//pass callback function which is called when the save is done whether it worked or not and if err then we know it wasn't saved properly

// george.save(function(err, cat){
// 	if (err) {
// 		console.log("SOMETHING WENT WRONG"); 
// 	} else {
// 			console.log("WE JUST SAVED A CAT TO THE DB:");
// 			console.log(cat);
// 	}
	
// }); 

Cat.create({
	//this method is basically new and save all at once
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err, cat){
	if(err){console.log(err);
	} else {
		console.log(cat);
	}
});
// retrieve all cats from the database and console.log each one
Cat.find({}, function(err, cats){ 
	if(err){
		console.log("OH NO, ERROR!");
	} else {
		console.log("All the cats:");
		console.log(cats);
	}
});
