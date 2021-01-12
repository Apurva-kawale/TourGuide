var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('search', {
        andaman: 'Andaman and Nicobar'

    });
});

module.exports = router;