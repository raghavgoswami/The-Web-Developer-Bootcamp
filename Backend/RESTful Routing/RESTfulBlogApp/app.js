var methodOverride = require("method-override"),
  expressSanitizer = require("express-sanitizer"),
 	    bodyParser = require("body-parser"),
		  mongoose = require("mongoose"),
           express = require("express"),
		       app = express();
	
//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public")); // allows us to serve our custom css
app.use(bodyParser.urlencoded({extended: true})); // allows us to extract data submitted through form through req body
app.use(expressSanitizer()); // this must go after body-parser
app.use(methodOverride("_method"));


//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES
app.get("/", function(req, res){

	res.redirect("/blogs");
	
});
//INDEX ROUTE
app.get("/blogs", function(req, res){
	
	Blog.find({},function(err, blogs){
		if(err){
			console.log(err)
		} else {
		res.render("index", {blogs: blogs});
		}
	});
});

//NEW ROUTE
app.get("/blogs/new", function(req,res){
	res.render("new");
	
});
//CREATE ROUTE
app.post("/blogs", function(req, res){
	//create blog
	console.log(req.body);
	req.body.blog.body = req.sanitize(req.body.blog.body);
	console.log("====");
	console.log(req.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		} else {
			//redirect to index
			res.redirect("/blogs"); //get request by default
		}
	});
});

//SHOW ROUTE
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundBlog}); 	
		}
	});
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err) {
				res.redirect("/blogs");
		} else {
				res.render("edit", {blog: foundBlog});
		}
	});
});

//UPDATE ROUTE

app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		} else{
			res.redirect("/blogs/" + req.params.id);
		}
	});
});

//DELETE/DESTROY ROUTE
app.delete("/blogs/:id", function(req, res){
	//destroy blog
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs");
		}
	});
	//redirect somewhere
});
app.listen(3000, process.env.IP, function(){
	console.log("SERVER IS LISTENING ON PORT 3000");
});