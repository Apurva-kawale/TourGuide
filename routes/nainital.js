var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('nainital', {
        nainital: 'NAINITAL'
    });
});

module.exports = router;