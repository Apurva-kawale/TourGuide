var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('an', {
        an: 'ANDAMAN AND NICOBAR'
    });
});

module.exports = router;