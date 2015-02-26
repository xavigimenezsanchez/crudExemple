var mongoose = require("mongoose");
mongoose.connect("mongodb://xavi3:patata@ds039421.mongolab.com:39421/xaviproves",function(err) {
          if(err) throw err;  
          console.log("connected to mongolab");
});

module.exports = mongoose;
