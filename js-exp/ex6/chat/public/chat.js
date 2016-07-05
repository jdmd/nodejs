var socket;

window.onload = function() {
    socket = io.connect('http://localhost:8080');
    var messages = [];
    var field = document.getElementById('field');
    var form = document.getElementById('form');
    var content = document.getElementById('content');

    var name = prompt('Как вас зовут?', 'Гость');

    if (name) {
        socket.emit('hello', { name: name });
    }

    socket.on('message', function(data) {
        if (data.message) {
            if (data.name) {
                data.message = data.name + ': ' + data.message;
            }
            messages.push(data.message);
            var html = '';
            for (var i = 0; i < messages.length; i++) {
                html += messages[i] + '<br/>';
            }
            content.innerHTML = html;
        } else {
            console.log('Something wrong.');
        }
    });

    form.onsubmit = function() {
        var text = field.value;
        socket.emit('send', { message: text, name: name });
        form.reset();
        return false;
    };
};

window.onunload = function() {
    socket.disconnect();
}
