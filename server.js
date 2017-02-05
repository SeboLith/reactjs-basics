'use strict';

var path = require('path');
var Express = require('express');

var port = process.env.PORT || 3000;
// initialize the server and configure support for ejs templates
var app = Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'dist'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'dist')));

// start the server
app.listen(port, () => {
  console.info(`Server running on http://localhost:${port}`);
});