var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
const { token } = require('morgan');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Iniciar Sesión' });
});

router.post('/login', function(req, res, next) {
  let usuario = req.body;

  var tokem = jwt.sign({usuario:usuario.user},'@&123ert');
 
  console.info('token',tokem);
  if (usuario.user=='Kenny') {
    
    res.redirect('/users');
    
  }else{
   res.render('index', { title: 'Iniciar Sesión', errors:true }); 
  }

  
});

module.exports = router;
