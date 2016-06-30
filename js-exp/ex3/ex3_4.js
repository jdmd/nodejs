//ex3_4
var fs = require('fs');
var path = require('path')
var PORT = process.env.PORT || 3000;
var server = require('http').createServer().listen(PORT);
var fileName = 'SAP_logo.png';

server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type': 'image/'+path.extname(fileName).replace(".","")});
	var fileRStream = fs.FileReadStream(fileName);
	fileRStream.pipe(res);
});

server.on('listening', function() {
	console.log('Listen port',PORT+'...');
});