//ex3_1
var fs = require('fs');

var fileRStream = fs.FileReadStream('index.html');

fileRStream.on('data', function(content) {
	console.log(content.toString());
});