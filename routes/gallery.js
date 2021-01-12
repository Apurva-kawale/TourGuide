var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('gallery', {
        tour: 'INDIA TOUR'
    });
});

module.exports = router;