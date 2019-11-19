//fetching data from jsonplaceholder API using request promises - nice ES6 syntax
const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users/1')
.then((body)=> {
	const parsedData = JSON.parse(body);
	console.log(`${parsedData.name} lives in ${parsedData.address.city}`);			
}) 
.catch((err) => { console.log('Error!', err);
});

//need a callback or a promise b/c a response to a request is not instantaneous 