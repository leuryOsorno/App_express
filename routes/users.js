var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res)=> {
  res.render('users/users',{title: 'Usuario'});
});

module.exports = router;
