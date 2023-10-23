var express = require('express');
//const UserModel = require('../models/UserModel');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('/home');
})

module.exports = router;