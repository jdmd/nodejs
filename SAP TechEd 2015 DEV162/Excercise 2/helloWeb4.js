var http = require('http');
var opn = require('opn');
var express = require('express');
var myModule = require('./myModule');
var PORT = process.env.PORT || 3000;

var app = express();
//Hello Route
app.route('/hello')
	.get(function(req,res) {
		res.send('Hello World');
	});

app.use('/', express.static(__dirname + '/html'));

app.route('/module')
	.get(function(req,res) {
		res.send(myModule.helloModule());
	});

//Start the Server
var server = app.listen(PORT, function() {
	console.log('Server running at http://localhost:'+PORT+'/hello');
	opn('http://localhost:'+PORT+'/hello');
});