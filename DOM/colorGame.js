var numSquares = 6;
var colors =[];
var pickedColor;	

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); //list of mode buttons

init();

function init(){
	//setting up event handlers for mode buttons***
	setupModeButtons();
	setupSquares();
	reset();

}

function setupModeButtons(){
	for (var i=0; i < modeButtons.length;i++){	//allows us to later add "med", "normal", "super hard" 
	//...later w/o adding extra listeners
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares=6;
		reset();
		});
	}
}

function setupSquares(){
	for (var i =0; i<squares.length;i++){
		//setting up event handlers for squares***

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grab color of picked square
			var clickedColor = this.style.backgroundColor;
		//compare color to picked color
			if(clickedColor === pickedColor){
				msgDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
			this.style.backgroundColor = "#232323";
			msgDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	msgDisplay.textContent = "";
	// change colors of squares to colors in array
	for (var i=0;i<squares.length;i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} 
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	//loop through all squares
	for(var i=0; i<squares.length;i++) {
		//change colors of all squares to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	///repeat num times
	for (var i=0;i<num;i++){
	//get random color and push into array
	arr.push(randomColor());

	}
	//return array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor((Math.random()*256))
	//pick a "green" from 0-255
	var g = Math.floor((Math.random()*256))
	//pick a "blue" from 0-255
	var b = Math.floor((Math.random()*256))

	return "rgb(" + r + ", " + g + ", " + b +")";
}