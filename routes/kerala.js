var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('kerala', {
        kerala: 'KERALA'
    });
});

module.exports = router;