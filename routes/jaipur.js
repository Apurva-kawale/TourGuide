var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('jaipur', {
        jaipur: 'JAIPUR'
    });
});

module.exports = router;