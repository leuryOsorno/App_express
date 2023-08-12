var express = require('express');
var router = express.Router();

const userService = require('../services/user.service');

/* GET users listing. */
router.get('/',async (req, res)=> {
  const users = await userService.findUsers();
  console.info('findUser',users);

  res.render('users/users',{title: 'Usuario',userList:users});
});

module.exports = router;
