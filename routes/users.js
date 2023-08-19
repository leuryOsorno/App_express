var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

const userService = require('../services/user.service');

/* GET users listing. */
router.get('/',async (req, res)=> {
  const users = await userService.findUsers();
  console.info('findUser',users);
  var token = jwt.sign({usuario:users.user},'@&123ert');
  res.render('users/users',{
    title: 'Usuario',
    userList:users,
    jwt:token
  });
});

module.exports = router;
