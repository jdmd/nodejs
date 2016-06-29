var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3000;

http.createServer(function(req,res) {
	res.setHeader('Content-Type', 'text/html');
	res.writeHeader(200);
	res.write('Hello from jdmd!');
	fs.readFile('index.html', 'utf8', function(err, content) {
		res.write(content);
		res.end();
	});
}).listen(port);

console.log("Server running at http://localhost:"+port);