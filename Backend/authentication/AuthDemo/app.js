var express 			  = require("express"), 
	mongoose 			  = require("mongoose"),
	passport 			  = require("passport"),
	bodyParser	          = require("body-parser"),
	User 				  = require("./models/user"),
	LocalStrategy 		  = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
	secret: "Rusty is the worst and ugliest dog in the world", 
	resave: false, 
	saveUninitialized: false 	
}));

app.use(passport.initialize()); //this line and below line set passport up to work in app
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate())); //create new local strat using user.auth coming from passport-local-mongoose
//important methods for reading session/taking data and unencoding, then encoding it and putting it back in the session. these methods come with passport Local Mongoose
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//================
//ROUTES
//================

app.get("/", function(req, res){
	res.render("home");
})

//isLoggedIn checks user req is authenticated
app.get("/secret", isLoggedIn, function(req, res){
	res.render("secret");
})

//Auth Routes

//show sign up form
app.get("/register", function(req,res){
	res.render("register");
});

//handle user sign up
app.post("/register", function(req,res){
	req.body.username
	req.body.password
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){ //logs user in, take care of session, store correct info, run serializeUser method. 
		res.redirect("/secret");
		});
	});
});

//LOGIN ROUTES
//render login form
app.get("/login", function(req, res){
	res.render("login");
});
//login logic - middleware example - code that runs before final route callback
//can stack them - the idea is that they sit between beginning of route and the end (route handler)
//passport.auth is gonna compare typed password to the hashed one in the db then req redirect accordingly
app.post("/login", passport.authenticate("local",{
	successRedirect: "/secret",
	failureRedirect: "/login"
}),function(req, res){
	
});

//logout 
app.get("/logout", function(req,res){
	req.logout(); //session data saved between reqs is destroyed
	res.redirect("/");
});

function isLoggedIn(req, res, next){
	//next is the next thing that needs to be called (the callback function in the secret route
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.listen(3000, process.env.IP, function(){
	console.log("SERVER LISTENING ON PORT 3000");
});