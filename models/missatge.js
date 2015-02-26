var db = require("../db");
var Missatge = db.model('Missatge', {
            username: {
                type: String,
                required: true
            },
            body: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true,
                default: Date.now
            }
    });

module.exports = Missatge;

