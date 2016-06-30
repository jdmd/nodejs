var warn = function(msg) {
	console.log('Warning:',msg);
}

var error = function(msg) {
	console.log('Error:',msg);
}

var info = function(msg) {
	console.log('Info:',msg);
}

exports.warn = warn;
exports.error = error;
exports.info = info;