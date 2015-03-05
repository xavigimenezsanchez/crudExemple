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
    if (req.auth) {
        var missatge = new Missatge({
            username : req.auth.username,
            body: req.body.body
        });
        missatge.save(function(err, missatge) {
            if (err) { return next(err) }
            res.status(201).json(missatge);
        });
    } else {
        res.status(401).json({"missatge":"No autoritzat"});
    }
});
router.delete('/:id',function(req,res,next) {
    if (req.auth) {
        Missatge.remove({"_id":req.params.id},function(err) {
            if (err) return next(err);
            res.status(202).json({"missatge":"missatge esborrat"});
        });
    } else {
        res.status(401).json({"missatge":"No autoritzat"});
    }
});

router.put('/',function(req,res,next) {
    if (req.auth) {
        Missatge.findByIdAndUpdate(req.body._id,req.body, function(err) {
            if (err) return next(err);
            res.status(201).json({"missatge": "Missatge modificat"});
        });
    } else {
        res.status(401).json({"missatge":"No autoritzat"});
    }
});
module.exports = router;
