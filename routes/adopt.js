const express = require('express');
const router = express.Router();

router.use(express.static('static/nav'));
router.use(express.static('static/adopt'));

const {User,Pet,Item,RealPet} = require('../models/exportAllModels');

router.get('/', async (req, res) => {
    const pets = await Pet.find();
    res.render('pages/adopt/index', { pets });
});

router.post('/', async (req, res) => {
    const pet = await Pet.findOne({name: req.body.species});
    const user = await User.findOne({name: 'Sahil'});
    if (user.pets.length >= 3) {
        res.redirect('/home');
    }
    else {
        const realpet = await new RealPet({
            nickname: req.body.nickname,
            species: pet._id,
            fitness: parseInt(req.body.fitness),
            happiness: parseInt(req.body.happiness),
            goodness: parseInt(req.body.goodness), 
            advness: parseInt(req.body.advness),
            socialskillness: parseInt(req.body.socialskillness),
            luckiness: parseInt(req.body.luckiness)
        });
        await realpet.save();
        await user.pets.push(realpet);
        await user.save();
        res.redirect('/profile');
    }
});

module.exports = router;