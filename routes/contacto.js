var express = require('express');
var router = express.Router();

/* pagina de Contacto. */
router.get('/', function(req, res, next) {
  res.render('contacto',);// llama a /views/contacto.hbs
});
module.exports = router;
