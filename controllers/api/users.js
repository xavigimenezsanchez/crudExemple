var router = require("express").Router();
var bcrypt = require("bcrypt");
var jwt = require('jwt-simple');
var User = require("../../models/users");
var config = require("../../config");

router.get('/', function(req, res, next) {
    if (!req.headers['x-auth']) return res.status(401).json({"missatge": "error auth"});
    console.log(req.headers['x-auth']);
    var auth = jwt.decode(req.headers['x-auth'], config.secret);
    User.findOne({username: auth.username}, function(err,user) {
        if (err) return next(err);
        res.status(200).json(user);
    });
});

router.post('/', function(req, res, next) {
    var user = new User({username: req.body.username});
    bcrypt.hash(req.body.password, 11, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        user.save(function(err) {
            if (err) return next(err);
            res.status(201).json({"missatge": "user auth"});
        });
    });
});

module.exports = router;