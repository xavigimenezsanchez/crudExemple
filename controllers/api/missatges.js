var Missatge = require("../../models/missatge");
var router = require("express").Router();
router.get("/", function(req, res, next) {
    Missatge.find()
            .sort('-date')
            .exec(function(err, misstages) {
        if (err) {
            return next(err);
        }
        res.json(misstages);
    });
    
});

router.post("/", function (req,res,next) {
    console.log(req.body.body);
    console.log("req.auth.username:"+req.auth);
    var missatge = new Missatge({
        username : req.auth.username,
        body: req.body.body
    });
    missatge.save(function(err, missatge) {
        if (err) { return next(err) }
        res.status(201).json(missatge);
    });
});
router.delete('/:id',function(req,res,next) {
    Missatge.remove({"_id":req.params.id},function(err) {
        if (err) return next(err);
        console.log(req.params);
        res.status(202).json({"missatge":"missatge esborrat"});
    });
});

router.put('/',function(req,res,next) {
    Missatge.findByIdAndUpdate(req.body._id,req.body, function(err) {
        if (err) return next(err);
        res.status(201).json({"missatge": "Missatge modificat"});
    });
});
module.exports = router;
