function printReverse(arr){
	//forEach is not ideal here b/c it doesn't allow us to ctrl traversal order
	for(var i = arr.length-1;i>=0;i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	for(var i = 1;i<arr.length;i++){
		if (arr[0]!==arr[i]){
			return false;
		}
	}
	return true;
}
//forEach variation below:
// function isUniform(arr) {
// 	result = true;
// 	arr.forEach(function(element){
// 		if ((arr[0] !== element)){
// 			result = false;
// 		}
// 	});
// 	return result;
// }

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(element){
		sum+=element;
	});
	return sum;
}

function max(arr){
	var max = arr[0];
	for(var i = 1;i<arr.length;i++){
		if (max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}
//forEach variation below:
// function max(arr){
// 	var max=arr[0];
// 	arr.forEach(function(element){
// 		if (element>max) {
// 			max=element;
// 		}
// 	});
// 	return max;
// }

//myForEach function - my version of built-in forEach
function myForEach(arr, func){
	for (var=0; var <arr.length; i++){
		func(arr[i]);
	}
}

//testing it
colors = ["red", "orange", "yellow"]
myForEach(colors, function(color){
	console.log(color);
}

//myForEach() method
Array.prototype.myForEach = function(func){
	for (var=0; var <this.length; i++){
		func(this[i]); //this refers to particular Array the method is called on
}

//testing it
var friends = ["charlie", "dave", "maddie", "caitlin"];
friends.myForEach(function(name){
	console.log("I love " + name);
})