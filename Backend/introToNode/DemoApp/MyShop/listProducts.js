var faker = require('faker');

var randomProduct = faker.commerce.productName;
var randomPrice = faker.commerce.price;

console.log("===================")
console.log("WELCOME TO MY SHOP")
console.log("===================");

for(var i =0; i<=10; i++)
	console.log(randomProduct() + ' - $' + randomPrice());
