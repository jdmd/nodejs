//ex3_2
var fs = require('fs');

var fileRStream = fs.FileReadStream('index.html');

fileRStream.on('data', function(content) {
	process.stdout.write(content);
});