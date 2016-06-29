var http = require('http');
var fs = require('fs');
var opn = require('opn');
var port = process.env.PORT || 3000;

server = http.createServer(function(req,res) {
	res.setHeader('Content-Type', 'text/html');
	res.writeHeader(200);
	res.write('Hello from jdmd!');
	fs.readFile('index.html', 'utf8', function(err, content) {
		res.write(content);
		res.end();
	});
}).listen(port, function() {
	console.log("Server running at http://localhost:"+port);
	opn('http://localhost:'+port);
});