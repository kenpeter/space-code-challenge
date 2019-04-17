const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config.json');

global.db = global.db ? global.db : mongoose.createConnection(config.dbUrl);
// db needs to before the route
const routes = require('./routes/routes.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', routes.profileHome);
app.post('/api/create-profile', routes.createProfile);

const server = app.listen(8000, function() {
  console.log('app running on port.', server.address().port);
});
