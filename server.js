var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.enable('trust proxy', 'loopback');
//var https = require("https");
//var fs = require("fs");
//var url = require("url");
//var key = fs.readFileSync('./server.pem');
//var cert = fs.readFileSync('./server.crt')
/*var https_options = {
    key: key,
    cert: cert
};
*/
app.use(bodyParser.json());
app.use("/api/missatges", require("./controllers/api/missatges"));
app.use("/api/sessions", require("./controllers/api/sessions"));
app.use("/api/users", require("./controllers/api/users"));
app.use(require("./auth"));
app.use("/",require("./controllers/static"));

app.listen(process.env.PORT, function() {
    console.log('Server listening on ', process.env.PORT);
});
/*
https.createServer(https_options,app).listen(process.env.PORT,process.env.IP, function() {
    console.log('Server listening on ', process.env.PORT);
});
*/