var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('udaipur', {
        udaipur: 'UDAIPUR'
    });
});

module.exports = router;