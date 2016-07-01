var fs = require('fs');

function getFile(fileName) {
	return fs.createReadStream(fileName);
}

module.exports = getFile;