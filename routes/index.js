var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Iniciar Sesión' });
});

router.post('/login', function(req, res, next) {
  let usuario = req.body;

  if (usuario.user=='Kenny') {
    res.render('index', { title: 'Usuarios', errors:true });
  }

  res.render('index', { title: 'Iniciar Sesión', errors:true });
});

module.exports = router;
