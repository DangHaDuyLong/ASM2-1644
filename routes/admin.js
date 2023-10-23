const express = require("express");
const router = express.Router();
const CardModel = require('../models/CardModel');
const LegoModel = require('../models/LegoModel');
const UserModel = require('../models/UserModel'); 
router.get('/show', async (req, res) => {
    var cards = await CardModel.find();
    var legos = await LegoModel.find();
    res.render('admin/listproduct', { cards: cards , legos: legos });
});
router.get('/', async (req, res) => {
    var cards = await CardModel.find();
    var legos = await LegoModel.find();
    res.render('admin/index', { cards: cards , legos: legos });
});
router.post('/search', async (req, res) => {
        var keyword = req.body.name;
        // Relative search
        var cards = await CardModel.find({ name: new RegExp(keyword, "i") });
        var legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
        res.render('admin/listproduct', { cards: cards, legos: legos });
});
router.get('/login', async (req, res) => {
    res.render('admin/login')});
    router.post('/login', async (req, res) => {

        var login = await UserModel.findOne(
          {
            username: req.body.username,
            password: req.body.password
          }
        )
        //điều hướng web khi login succeed (vào trang admin) hoặc login fail (về lại trang login)
        if (login)  //login == true
          res.redirect('/admin')
        else
          res.redirect('/admin/login');
      })

module.exports = router;