var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

// application level middleware
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// route level middleware
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname+'/public'));
console.log(__dirname);

app.listen(PORT, function() {
	console.log('Express server started on port: '+PORT+'!!');
});

