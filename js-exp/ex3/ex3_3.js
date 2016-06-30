//ex3_3
var fs = require('fs');

var fileRStream = fs.FileReadStream('index.html');

fileRStream.pipe(process.stdout);
