var express = require('express');
var socket = require('socket.io');
var port = process.env.PORT || 8080;

var app = express();
var io = socket.listen(app.listen(port, function() {
    console.log('App listen port:', port);
}));

var users = {};
function getUsers(obj) {
	var tmp = [];
	for (var i in obj) {
		tmp.push(obj[i]);
	}
	return tmp.join(', ');
}

app.set('views', __dirname + '/tpl');
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('page');
});

io.sockets.on('connection', function(client) {
    console.log('Connected');
    //client.emit('message', { message: "Добро пожаловать в чат!" });
    client.on('send', function(data) {
        if (data.message) {
            io.sockets.emit('message', { message: data.message, name: data.name });
        } else {
            io.sockets.emit('message', { message: 'Ошибка отправления' });
        }
    });
    client.on('hello', function(data) {
        client.nickname = data.name;
        client.emit('message', { message: '--- Добро пожаловать в чат, ' + data.name + '! ---' });
        client.broadcast.emit('message', { message: '--- ' + data.name + ' присоединился к чату ---' });
        if (Object.keys(users).length > 0) {
        	var userList = getUsers(users);
        	client.emit('message', {message: '--- Уже в чате: '+userList+' ---'});
        } else {
        	client.emit('message', {message: '--- Кроме вас в чате никого нет :( ---'});
        }
        users[client.id] = data.name;
    });
    client.on('disconnect', function(data) {
    	if (Object.keys(users).length > 1) {
    		client.broadcast.emit('message', {message: '--- '+client.nickname+' покинул чат ---'});
    	}
    	delete users[client.id];
    });
});
