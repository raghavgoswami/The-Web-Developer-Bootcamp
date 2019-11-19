var express    = require("express"), 
		app    = express(), 
 bodyParser    = require("body-parser"),
   mongoose    = require("mongoose"),
	flash 	   = require("connect-flash"),
   passport    = require("passport"),
LocalStrategy  = require("passport-local"),
methodOverride = require("method-override"),
 Campground    = require("./models/campground"),
	Comment    = require("./models/comment"),
	 User 	   = require("./models/user"),
	 seedDB    = require("./seeds");


//REQUIRING ROUTES
var commentRoutes=require("./routes/comments"),
campgroundRoutes=require("./routes/campgrounds"),
indexRoutes=require("./routes/index");

var url = process.env.DATABASEURL || "mongodb://localhost:27017/yelp_camp";
mongoose.connect(url);
// mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
// mongoose.connect("mongodb+srv://raghavG:password1234567890@cluster0-90pk0.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname +"/public")) //__dirname = abs path to dir that this script lives in 
//seed the database
//seedDB(); //removes existing records in db, adds 3 campgrounds with a comment on each
app.use(methodOverride("_method")); // look for _method 
app.use(flash());

//PASSPORT CONFIGURATION
//set up express session
app.use(require("express-session")({
	secret: "Once again Rusty loses cutest dog!",
	resave: false, 
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //user.auth comes with passportLocalMongoose
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

//route files to export router. prefix added in front of every route in the correponding file
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen((process.env.PORT || 3000), process.env.IP, function(){
	console.log("YelpCamp Server listening on port 3000");
});