const app = require('express');
const router = app.Router();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const {User,Pet,Item,RealPet} = require('../models/exportAllModels');

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.render("items/details", { item });
});

router.post('/createItemNew', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.render("/items/all");
    }
);

//Items

// router.get('', async (req, res) => {
//     const items = await Item.find();
//     res.render('items/all', { items });
//     }
// );

//How to search (parse queries)
router.get('', async (req, res) => {
    const { category } = req.query;
    const items = await Item.find();
    if (category) {
        const items = await Item.find({category: category});
        res.render('items/all', { user, items });
    }
    else {
        const items = await Item.find();
        res.render('items/all', { items });
    }
    }
);

router.get('/new', (req, res) => {
    res.render('admin/createItem');
    }
);

router.get('/:id', async (req, res) => {
    const { id } = req.params; //destructure it with {}
    const item = await Item.findById(id);
    res.render("items/details", { item });
    }
);


router.get('/:id/edit', async (req, res) => {
    const { id } = req.params; //destructure it with {}
    const item = await Item.findById(id);
    res.render("admin/editItem", { item });
    }
);

//incorrect
router.post('/:id/editItemNew', async (req, res) => {
    const { id } = req.params;
    const newItem = new Item(req.body);
    await newItem.save();
    res.render("/items/all");
    }
);


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByIdAndDelete(id);
    res.render("/items", { item });
    await user.pets.push(realpet);
});


module.exports = router;