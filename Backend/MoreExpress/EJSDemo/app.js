var express = require('express');
var app = express();

app.use(express.static("public")); //tells express to serve the contents of the public directory (like how views is by default)
app.set("view engine", "ejs"); //tell express that all templates will be ejs unless otherwise noted (e.g. in res.render(template, ...))

app.get("/", function(req, res){
	res.render("home");

});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing
	res.render("love", {thingVar: thing});
	
});

app.get("/posts", function(req, res){
	var posts = [{title: "post 1", author: "Susy"}, {title: "My adorable pet bunny", author: "Charlie"}, {title: "Can you believe this pomsky", author: "Me"}
	];
	res.render("posts", {posts: posts}); 
})

app.listen(3000, process.env.IP, function(){
	console.log("server is listening on port 3000");
});

