var router = require("express").Router();
var User = require("../../models/users");
var bcrypt = require("bcrypt");
var jwt = require("jwt-simple");
var config = require("../../config");

router.post('/', function(req,res, next) {
    User.findOne({username: req.body.username})
            .select('password')
            .select('username')
            .exec(function(err,user) {
                if (err) return next(err);
                if (!user) return res.status(401).json({"missatge": "usuari no existeix"});
                bcrypt.compare(req.body.password, user.password, function(err, valid) {
                    if (err) return next(err);
                    if (!valid) return res.status(401).json({"missatge": "contrasenya o usuari invàlid"});
                    var token = jwt.encode({username:user.username}, config.secret);
                    res.status(201).send(token);
                });
                
            });
});

module.exports = router;