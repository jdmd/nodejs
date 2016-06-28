var http = require('http');

console.log("Before HTTP Call\n");

http.get({
	path: "http://www.loc.gov/pictures/search/?fo=json&q=SAP"
}, function(response) {
	console.log(response);
	response.setEncoding('utf8');
	response.on('data', function(data) {console.log(data.substring(0,100))});
	response.on('error', console.error);
});

console.log("After HTTP Call\n");