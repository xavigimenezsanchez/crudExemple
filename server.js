var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var https = require("https");
var fs = require("fs");
//var url = require("url");
var key = fs.readFileSync('./server.pem');
var cert = fs.readFileSync('./server.crt')
var https_options = {
    key: key,
    cert: cert
};

app.use(bodyParser.json());
app.use(require("./auth"));
app.use("/api/missatges", require("./controllers/api/missatges"));
app.use("/api/sessions", require("./controllers/api/sessions"));
app.use("/api/users", require("./controllers/api/users"));

app.use("/",require("./controllers/static"));

https.createServer(https_options,app).listen(process.env.PORT,process.env.IP, function() {
    console.log('Server listening on ', process.env.PORT);
});

/*app.listen(process.env.PORT, function() {
    console.log('Server listening on ', process.env.PORT);
});
*/
/*app.listen =  function() {
    var server = https.createServer(this).listen;
    return server.listen(process.env.PORT,process.env.IP).apply(server, function () {
        console.log('Server listening on', process.env.PORT);
        
    });
    
};*/
//var patata = https.createServer(app);
//patata.listen(process.env.PORT, process.env.IP);
//var server = https.createServer(https_options, app).listen(process.env.PORT, process.env.IP);
/*,function() {
    console.log('Server listening on', process.env.PORT);
});*/

//app.listen();

//http://www.hacksparrow.com/node-js-https-ssl-certificate.html
//http://www.hacksparrow.com/express-js-https-server-client-example.html