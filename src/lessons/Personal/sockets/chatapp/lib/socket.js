function setupSockets(io) {
    io.on('connection', (socket) => {
        console.log('New user connected');

        socket.username = 'Anonymous';
        socket.on('change_username', (data) => {
            console.log('username changed to ' + data.username);
            const isChange = socket.username !== 'Anonymous' ? true : false;
            socket.username = data.username;
            io.sockets.emit('username_changed', { username: socket.username, isChange });
        });

        socket.on('new_message', (data) => {
            console.log('new message sent', data.newMessage);
            io.sockets.emit('new_message', { message: data.message, username: socket.username });
        });
    });
}

module.exports = {
    setUp: (server) => {
        const io = require('socket.io')(server);
        setupSockets(io);
    }
}
