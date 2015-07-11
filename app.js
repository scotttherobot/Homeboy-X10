var express = require('express');
var app = express();

app.set('view engine', 'html');
app.set('layout', 'layout');
app.set('partials', {header: "header"});
app.engine("html", require('hogan-express'));

app.get('/', function (req, res) {
   res.locals = {text: "hello"};
   res.render("index");
});

var server = app.listen(8080, function() {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Homeboy listening at http://%s:%s", host, port);
});
