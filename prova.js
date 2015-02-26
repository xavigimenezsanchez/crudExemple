var fs = require('fs');
var express = require('express');
var https = require('https');
var key = fs.readFileSync('./prova-key.pem');
var cert = fs.readFileSync('./prova-cert.pem');
var https_options = {
    key: key,
    cert: cert
};
var PORT = process.env.PORT||8000;
var HOST = process.env.IP;
var app = express();


 //   app.use(app.router);


var server = https.createServer(https_options, app).listen(PORT, HOST);
console.log('HTTPS Server listening on %s:%s', HOST, PORT);


// routes
app.get('/hey', function(req, res) {
    res.send('HEY!');
});
app.post('/ho', function(req, res) {
    res.send('HO!');
});