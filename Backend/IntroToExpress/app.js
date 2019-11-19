// first thing to do when youre in the project folder: type "npm init" in terminal to make a package.json. then, create app.js file. after that, install express using "npm install express --save" where "--save" flag adds express as a dependency in the package.json. 


var express = require('express'); // store contents of express pkg 
var app = express(); //execute the contents and save to var used to set up routes

//routes

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

//use route param inside of route def'n
app.get("/speak/:animal", function(req, res){
	
	var sounds = {pig: "Oink", 
				  cow: "Moo",
				  dog: "Woof Woof!",
				  cat: "I hate you human",
				  goldfish: "..."};
	
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	
	res.send("The " + animal + " says '" + sound + "'");
});
	

app.get("/repeat/:msgToRepeat/:numTimes", function(req, res) {			var msgToRepeat = req.params.msgToRepeat;
	var numTimes = Number(req.params.numTimes);
	var returnString ="";
															  
	for (var i = 0; i<numTimes; i++){
		returnString +=msgToRepeat +  " ";
	}
																	  	  res.send(returnString);
		
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

//following code tells apps to listen on port 3000. note that the callback is optional.
app.listen(3000, process.env.IP, function(){
	console.log("starting server!");
});