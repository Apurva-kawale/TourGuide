var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('khandala', {
        khandala: 'KHANDALA'
    });
});

module.exports = router;