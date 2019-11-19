var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");
var Post = require("./models/post");
var User = require("./models/user");

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });

Post.create({
	title: "How to cook the best burger pt 4",
	content: "QWERTY"
}, function(err, post){
	User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
		if(err){ 
			console.log(err)
		} else {
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if(err){
					console.log(err);
				} else {
					console.log(data);
				}
			});
		}
	});
});

//find user
//find all posts for that user

//find user w/ email bob@gmail.com, populate the posts array the post objects referenced, start the query
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });