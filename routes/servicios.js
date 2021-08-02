var express = require('express');
var router = express.Router();

/* pagina de Servicios. */
router.get('/', function(req, res, next) {
 // res.render('index',);       
    res.send('Hola soy la pag de Servicios');
});
module.exports = router;
