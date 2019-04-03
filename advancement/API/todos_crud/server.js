const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(express.static('app/public'));

const port = 4300;

const controllerSetup = require('./app/controllers');
controllerSetup(app, db);

app.listen(port, () => console.log(`App listening on ${port}`));
