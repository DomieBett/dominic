const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const requestHandlers = require('./lib/handlers/requestHandlers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', routes);
app.use(requestHandlers.notFoundHandler);

// Extend Request Object with method to pick specific attributes from
// request body.
require('./lib/extensions/requestExtensions')(app);

app.listen(4000);
