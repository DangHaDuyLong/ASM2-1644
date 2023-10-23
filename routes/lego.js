const express = require("express");
const router = express.Router();
const LegoModel = require('../models/LegoModel');

router.get('/', async (req, res) => {
        var legos = await LegoModel.find();
        res.render('lego/index', { legos: legos });
});

router.get('/delete/:id', async (req, res) => {
        var id = req.params.id;
        await LegoModel.findByIdAndDelete(id);
        console.log('Card deleted successfully');
        res.redirect('/admin');
});

router.get('/add', (req, res) => {
    res.render('lego/add');
});

router.post('/add', async (req, res) => {
        var lego = req.body;
        await LegoModel.create(lego);
        console.log('Add lego succeed !');
        res.redirect('/admin');
});

router.get('/edit/:id', async (req, res) => {
        var id = req.params.id;
        var lego = await LegoModel.findById(id);
        res.render('lego/edit', { lego: lego });
});

router.post('/edit/:id', async (req, res) => {
        var id = req.params.id;
        var lego = req.body;
        await LegoModel.findByIdAndUpdate(id, lego);
        console.log('Update lego succeed !');
        res.redirect('/admin');
});

// router.post('/search', async (req, res) => {
//         var keyword = req.body.name;
//         // Relative search
//         var legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
//         res.render('lego/index', { legos: legos });
// });

// router.get('/nameasc', async (req, res) => {
//         // 1: ascending, -1: descending
//         var legos = await LegoModel.find().sort({ name: 1 });
//         res.render('lego/index', { legos: legos });
// });

// router.get('/namedesc', async (req, res) => {
//         var legos = await LegoModel.find().sort({ name: -1 });
//         res.render('lego/index', { legos: legos });
// });
router.get('/show', async (req, res) => {
        var legos = await LegoModel.find();
        res.render('lego/show', { legos: legos });
});
router.get('/detail/:id', async (req, res) => {
        var id = req.params.id;
        var lego = await LegoModel.findById(id);
        res.render('lego/detail', { lego: lego });
});


module.exports = router;
