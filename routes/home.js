var express = require('express');
const CardModel = require('../models/CardModel');
const LegoModel = require('../models/LegoModel');
var router = express.Router();

router.get('/', async (req, res) => {
  var cards = await CardModel.find();
  var legos = await LegoModel.find();
  res.render('home', { cards: cards, legos: legos});
});


module.exports = router;