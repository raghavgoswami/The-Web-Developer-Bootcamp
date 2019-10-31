var Todos = ["Buy New Turtle"];
window.setTimeout(function()
{
	var input = prompt("What would you like to do?");

	while (input!=="quit"){
		
		if (input === "list") {
			listTodos();
		} else if (input === "new"){
			addTodo();
		} else if (input === "delete"){
			deleteTodo();
		}
		
		input = prompt("What would you like to do?");

	}
console.log("Ok, you quit the App.");
},500);

function listTodos(){
	console.log("**********");
	Todos.forEach(function(element, index){
	console.log(index + ": " + element);
	});
	console.log("**********");
}

function addTodo(){
	var newTodo = prompt("Enter a new Todo");
	Todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	var indexToDel = prompt("Enter index of Todo to delete");
	Todos.splice(indexToDel, 1);
	console.log("Deleted Todo");
}