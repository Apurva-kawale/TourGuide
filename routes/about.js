var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    res.render('about', {
        jagruti: 'Jagruti Manwar',
        apurva: 'Apurva Kawale',
        rucha: 'Rucha Damre'
    });
});

module.exports = router;