$(function () {
    const message = $('#message-input');
    const username = $('#username');
    const sendMessage = $('#send-message');
    const sendUsername = $('#submit-username');
    const chatroom = $('#chatroom');
    const usernamePrompt = $('#username-prompt');

    username.val('');
    message.val('');

    const socket = io.connect('http://localhost:3000');

    socket.on('username_changed', (data) => {
        console.log(data.username, data.isChange)
        if (!data.isChange) {
            usernamePrompt.addClass('post-username');
            usernamePrompt.removeClass('pre-username');
            sendUsername.val('Change Username');
        }
    });

    socket.on('new_message', (data) => {
        console.log(data.message, data.username);
        const newMessage = `  <p>${data.username} : ${data.message}</p>`;
        chatroom.append(newMessage);
    });

    sendUsername.click(() => {
        console.log(username.val());
        socket.emit('change_username', { username: username.val() });
    });

    sendMessage.click(() => {
        console.log(message.val());
        socket.emit('new_message', { message: message.val() });
        // clear the message field
        message.val('');
    });
});
