const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASEURL, {
useNewUrlParser : true,
useCreateIndex: true
}).then(() => {
	console.log('Connected to DB!');
}).catch(err => {
	console.log('ERROR', err.message);
});

app.get('/', (req, res) => {
res.send('Is this thing on?');
});

app.listen(3000, ()=> {
	console.log('server listening on port 3000');
});