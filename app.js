var app = require('express')(),
  	swig = require('swig');

var express = require('express');

// This is where all the magic happens!
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

app.get('/', function (req, res) {
  res.render('index', { /* WTF ?! */});
});

app.get('/testswig', function (req, res) {
  res.render('testswig', { /* WTF ?! */});
});

app.get('/index', function (req, res) {
  res.render('index', { /* WTF ?! */});
});

app.get('/portfolio', function (req, res) {
  res.render('portfolio', { /* WTF ?! */});
});

app.get('/about', function (req, res) {
  res.render('about', { /* WTF ?! */});
});

app.get('*', function (req, res) {
  res.status(404).send('Sorry, the page you are requesting does not exist.');
});

app.listen(6666);
console.log('Application Started on http://localhost:6666/');



///////////////////////////////////////////////////////////////////////////////////////////
//											FIRST TRY: 									 //
// var express = require('express');
// var path = require('path');
// var app = express();
// var swig = require('swig');

// // Define the port
// app.set('port', 3000);

// app.use(express.static('webdev'));

// // Listen for requests
// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('Waiting for connections on port ' + port);
// });
//																						 //
///////////////////////////////////////////////////////////////////////////////////////////
