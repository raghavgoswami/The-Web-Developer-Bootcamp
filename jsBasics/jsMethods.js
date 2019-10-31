comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];

//function defined in global namespace
function print(arr){
	arr.forEach(function(el){
	console.log(el);
	});
};

//function defined in comments namespace 
comments.print = function(){
	this.data.forEach(function(el){
		console.log(el);
	});
};
