var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.status(200).sendFile('public/index.html', {root: __dirname + '/'});
});
app.get('/index', function(req, res){
  res.status(200).sendFile('public/index.html', {root: __dirname + '/'});
});
app.get('/index.html', function(req, res){
  res.status(200).sendFile('public/index.html', {root: __dirname + '/'});
});
app.get('/*', function(req, res){
  res.status(404).sendFile('public/404.html', {root: __dirname + '/'});
});

var port = process.env.PORT || 3000;

var server = app.listen(port, 'localhost', function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server running on: http://localhost:%s',port);
});
