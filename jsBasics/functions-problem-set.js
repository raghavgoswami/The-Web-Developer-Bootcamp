//function expression for isEven()
x = function(num){
	return num%2===0;
}

//non-ideal sol'n
function factorial(n) {
	if (n==0){
		return 1}
	var product=n;
	for(var i=n-1; i>=1;i--){
		product *=i;		
	}

	return product;
}

function kebabToSnake(kebabStr) {
	
	var snakeStr = kebabStr.replace(/-/g ,"_");

	return snakeStr;

}


