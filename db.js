var mongoose = require("mongoose");
var config = require('./config')
mongoose.connect('mongodb://' + config.userMongo +':' + config.passMongo + '@' + config.urlMongo,function(err) {
          if(err) throw err;  
          console.log("connected to mongolab");
});

module.exports = mongoose;
