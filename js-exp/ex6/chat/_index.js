var express = require('express');
var socket = require('socket.io');
var port = process.env.PORT || 8080;

var app = express();
var io = socket.listen(app.listen(port, function() {
    console.log('App listen port:', port);
}));

app.set('views', __dirname + '/tpl');
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('page');
});

io.sockets.on('connection', function(client) {
    console.log('Connected');
    client.emit('message', { message: "Добро пожаловать в чат!" });
    client.on('send', function(data) {
        if (data.message) {
            io.sockets.emit('message', { message: data.message });
        } else {
            io.sockets.emit('message', { message: 'Ошибка отправления' });
        }
    });
});
