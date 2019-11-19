function average(arr){
	var sum = 0;
	arr.forEach(function(score){
		sum+=score;
	})
	
	return(Math.round(sum/arr.length));
}

var scores = [90, 100, 89, 100, 100, 86, 94]; 
console.log(average(scores)); // should return 94
var scores2 =[40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));  // should return 68