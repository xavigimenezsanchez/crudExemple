var router = require("express").Router();
var bcrypt = require("bcrypt");
var jwt = require('jwt-simple');
var User = require("../../models/users");
var config = require("../../config");

router.get('/', function(req, res, next) {
    if (!req.headers['x-auth']) return res.status(401).json({"missatge": "Error autenticació"});
    var auth = jwt.decode(req.headers['x-auth'], config.secret);
    User.findOne({username: auth.username}, function(err,user) {
        if (err) return next(err);
        res.status(200).json(user);
    });
});

router.post('/', function(req, res, next) {
    /* Primer cerquem l'usuari a la mongo */
    User.findOne({username:req.body.username}, function(err, user) {
        if (err) return next(err);
        if  (user) {
            res.status(409).json({"missatge":"l'usuari ja existeix"});
        } else {
                var nouUser = new User({username: req.body.username});
                bcrypt.hash(req.body.password, 11, function(err, hash) {
                    if (err) return next(err);
                    nouUser.password = hash;
                    nouUser.save(function(err) {
                        if (err) return next(err);
                        res.status(201).json({"missatge": "Usuari autenticat"});
                    });
                });
        }
    });

});

module.exports = router;