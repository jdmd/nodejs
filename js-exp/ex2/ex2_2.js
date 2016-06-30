var events = require('events');
var Logger = new events.EventEmitter();
var users = [],
	msgs = [];

Logger.on('message', function(msg) {
	console.log('New message:', msg);
	msgs.push(msg);
});

Logger.on('login', function(name) {
	console.log('New user:', name);
	users.push(name);
});

Logger.on('getUsers', function(users) {
	console.log('Logged users: ', users.join(' '));
});

Logger.on('getMsgs', function(msgs) {
	console.log('Messages: ', msgs.join('. '));
});

Logger.emit('message',  'Hello');
Logger.emit('login',  'Mike');
Logger.emit('message',  "It's me");
Logger.emit('login',  'Leo');
Logger.emit('message',  'Hello from the other side');
Logger.emit('login',  'Donny');

Logger.emit('getUsers', users);
Logger.emit('getMsgs', msgs);