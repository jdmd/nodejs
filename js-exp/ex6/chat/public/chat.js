window.onload = function() {
	var socket = io.connect('http://localhost:8080');
	var messages = [];
	var field = document.getElementById('field');
	var form = document.getElementById('form');
	var content = document.getElementById('content');

	socket.on('message', function(data) {
		if(data.message){
			messages.push(data.message);
			var html = '';
			for(var i=0; i<messages.length; i++) {
				html += messages[i] + '<br/>';
			}
			content.innerHTML = html;
		} else {
			console.log('Something wrong.');
		}
	});

	form.onsubmit = function() {
		var text = field.value;
		socket.emit('send', {message: text});
		return false;
	};
};