var express = require('express');

var app = express();
// Indica que EJS assumirá a View Engine
app.set('view engine', 'ejs');
// Indica o diretorio onde estarão as views
app.set('views', './app/views');

require('../app/routes/web')(app);

// este app será utilizado pelo app.js 
module.exports = app;