var express = require('express');
var app = express();

var mochad = require('./mochad/mochad')("127.0.0.1", 1099);

var home = require('./routes/index')(express),
    modules = require('./routes/modules')(express),
    api = require('./routes/api')(express, mochad);


app.set('view engine', 'html');
app.set('layout', 'layouts/layout');
app.set('partials', {header: "partials/header"});
app.engine("html", require('hogan-express'));

app.use('/', home);
app.use('/modules', modules);
app.use('/api', api);

var server = app.listen(8080, function() {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Homeboy listening at http://%s:%s", host, port);
});
