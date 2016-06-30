var http = require('http');
var opn = require('opn');
var PORT = process.env.PORT || 3000;
var server = http.createServer().listen(PORT);

server.on('request', function(req, res) {
	if (req.url === '/stop') {
		//req.connection.destroy();
		res.writeHead(200, {'Connection':'close'});
		server.close();	
	} else {
		res.writeHead(200);
		res.end('Hello from Node.js');
	}
});

server.on('listening', function() {
	console.log('Listen port',PORT+'...');
	opn('http://localhost:'+PORT);
});

server.on('connection', function() {
	console.log('Connect...');
});

server.on('request', function(req, res) {
	console.log('Request:', req.method, req.url, '\nResponse status:',res.statusCode);
});

server.on('close', function() {
	console.log('The end.');
});