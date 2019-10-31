// create secretNumber
var secretNumber = 4; //

//ask user for guess
var stringGuess = (prompt("guess a number"));
var guess = Number(stringGuess);
//check if guess is right
if (guess === secretNumber) {
	alert("You got it!!!");}

//check if guess is higher 
else if(guess > secretNumber) {
	alert("Too high. Guess again!");
}

else {alert("Too low. Guess again!");}




