var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('goa', {
        goa: 'GOA'
    });
});

module.exports = router;