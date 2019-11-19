var Campground = require("../models/campground");
var Comment = require("../models/comment");
//all the middleware goes here (campgrounds and comments)
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err || !foundCampground){ //is there an err or a null item returned?
				req.flash("error", "Campground not found.");
				return res.redirect("back");
			} else {
				//check if user owns the campground
				if(foundCampground.author.id.equals(req.user._id)){
					next();
				} else {
					req.flash("error", "You don't have permission to do that.");
					res.redirect("back");
			}
		}
	});
	} else {
		req.flash("error", "You need to be logged in to do that.");
		res.redirect("back");
	}
}

middlewareObj.checkCommentOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err || !foundComment){
				req.flash("error", "Comment not found.")
				res.redirect("back");
			} else {
				//check if user owns the comment
				if(foundComment.author.id.equals(req.user._id)){
					next();
				} else {
					req.flash("error", "You don't have permission to do that.");
					res.redirect("back");
			}
		}
	});
	} else {
		req.flash("error", "You need to be logged in to do that.");
		res.redirect("back"); //please sign-in message
	}
}

middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You need to be logged in to do that.");
	res.redirect("/login");
}

module.exports = middlewareObj