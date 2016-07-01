//ex4_2
var getFile = require('getfile');
var logs = require('./logs');

var path = require('path')
var PORT = process.env.PORT || 3000;
var server = require('http').createServer().listen(PORT);
var fileName = 'SAP_logo.png';

server.on('request', function(req, res) {
	res.writeHead(200, {'Content-Type': 'image/'+path.extname(fileName).replace(".","")});
	logs.info('Start reading');
	var fileRStream = getFile(fileName);
	fileRStream.pipe(res);
	logs.error('0');
});

server.on('listening', function() {
	logs.warn('Listen port '+PORT+'...')
});