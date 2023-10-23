const express = require("express");
const router = express.Router();
const CardModel = require('../models/CardModel');

router.get('/', async (req, res) => {
        var cards = await CardModel.find();
        res.render('card/index', { cards: cards });
});

router.get('/delete/:id', async (req, res) => {
        var id = req.params.id;
        await CardModel.findByIdAndDelete(id);
        console.log('Card deleted successfully');
        res.redirect('/admin');
});

router.get('/add', (req, res) => {
    res.render('card/add');
});

router.post('/add', async (req, res) => {
        var card = req.body;
        await CardModel.create(card);
        console.log('Add card succeed !');
        res.redirect('/admin');
});

router.get('/edit/:id', async (req, res) => {
        var id = req.params.id;
        var card = await CardModel.findById(id);
        res.render('card/edit', { card: card });
});

router.post('/edit/:id', async (req, res) => {
        var id = req.params.id;
        var card = req.body;
        await CardModel.findByIdAndUpdate(id, card);
        console.log('Update card succeed !');
        res.redirect('/admin');
});

// router.post('/search', async (req, res) => {
//         var keyword = req.body.name;
//         // Relative search
//         var cards = await CardModel.find({ name: new RegExp(keyword, "i") });
//         res.render('card/index', { cards: cards });
// });

router.get('/show', async (req, res) => {
        var cards = await CardModel.find();
        res.render('card/show', { cards: cards });
});
router.get('/detail/:id', async (req, res) => {
        var id = req.params.id;
        var card = await CardModel.findById(id);
        res.render('card/detail', { card: card });
});


module.exports = router;
