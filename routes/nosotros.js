var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index',);
    res.send('Hola soy nosostros');
});
module.exports = router;
