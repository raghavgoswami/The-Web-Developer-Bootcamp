var express = require('express');
var app = express();
var request = require('request'); 

app.set("view engine", "ejs"); //results data gets sent to a template for displaying

//route 1 - search - contains form which redirects to results route
app.get("/", function(req, res){
	res.render("search");
});

//route 2 - results - sends request to api and displays results
app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "https://www.omdbapi.com/?apikey=thewdb&s=" + query
	request(url, function(error, response, body){
		if (!error && response.statusCode == 200){
			var parsedData = JSON.parse(body);
			res.render("results", {data: parsedData}); //rendering ejs file
		}
	});
});

// app.listen(3000, process.env.IP, function(){
// 	console.log("Movie app has started");
// });