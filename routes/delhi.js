var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('delhi', {
        delhi: 'DELHI'
    });
});

module.exports = router;