const express = require('express');
const port = 3000;
const path = require('path');
// const morgan = require('morgan');

// set up server
var app = express();
app.set('port', port);

// parsing and logging
app.use(express.urlencoded({'extended': true}));
// app.use(morgan('dev'));

// specify the directory of static files
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// start server
app.listen(port, () => {
  console.log('Listening on', port);
});

module.exports = app;