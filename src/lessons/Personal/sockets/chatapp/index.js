const app = require('./app');
const socket = require('./lib/socket');

const server = app.listen(3000, () => console.log('App is listening on port 3000'));

socket.setUp(server);
