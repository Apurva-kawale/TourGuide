var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('agra', {
        agra: 'AGRA'
    });
});

module.exports = router;