console.log("our express app will go here");
//import and initialize express package 
var express = require('express'); 
var app = express();	

//****ROUTES****

// "/" -> "Hi there!"
app.get("/", function(request,response){
		response.send("Hi there!");
});
// "/bye" -> "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye");
});
// "/dog" -> "Meow!!!"
app.get("/dog", function(req, res){
	console.log("someone made a request to /dog")
	res.send("Meow");
})
//route param "subreddtName" - route params used to define pattern in routes
app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName; 
	res.send("welcome to the " + subreddit + " subreddit!");
});
//route params "subredditName", "id", "title"
app.get("/r/:subredditName/comments/:id/:title", function(req, res){console.log(req.params);
res.send("welcome to the comments page");
});

// anything else -> "you are a star!!!"
app.get("*", function(){
	res.send("you are a star!!!");
});

//Tell Express to listen for requests (Start servers)
app.listen(3000, process.env.IP, function() {
	console.log("server has started!!!");
});