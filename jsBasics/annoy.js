//version 1***
// var answer;
// answer = prompt("Are we there yet?");

// while (answer!=="yes" && answer!=="yeah") {
// answer = prompt("Are we there yet?");

// }

// alert("Yay, we made it!");


//version 2***
var answer;
answer = prompt("Are we there yet?");

while (!answer.includes("yes")){
	answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");


//version 3***

// var answer;
// answer = prompt("Are we there yet?");

// while (answer.indexOf("yes")===-1){
// 	answer = prompt("Are we there yet?");
// }

// alert("Yay, we made it!");