var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('ladakh', {
        ladakh: 'LADAKH'
    });
});

module.exports = router;