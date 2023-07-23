const express = require('express');
const router = express.Router();

router.use(express.static('static/nav'));
router.use(express.static('static/adopt'));
const {User,Pet,Item,RealPet} = require('../models/exportAllModels');

router.get('', async (req, res) => {
    const pets = await Pet.find();
    res.render('pets/all', { pets });
    }
);

//PUT Request -> Updates Details

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const pet = await Pet.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.render("pets/details", { pet });
});


//DELETE Request -> Deletes Pet
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const pet = await Pet.findByIdAndDelete(id);
    res.render("pets/all", { pet });
});

//Details Page
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    res.render('pets/details', { pet });
    }
);

//EDIT Page
router.get('/:id/edit', async (req, res) => {
    const { id } = req.params; //destructure it with {}
    const pet = await Pet.findById(id);
    res.render("admin/editPet", { pet });
    }
);



module.exports = router;