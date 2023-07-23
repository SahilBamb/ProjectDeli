const express = require('express');
const router = express.Router();

router.use(express.static('static/nav'));
router.use(express.static('static/details'));
const {User,Pet,Item,RealPet} = require('../models/exportAllModels');

router.get('/', async (req, res) => {
    let {petName} = req.query;
    console.log(petName);
    statString = {};
    rSum = 20;
    let fitness, happiness, goodness, advness, socialskillness, luckiness;
    stats = {fitness, happiness, goodness, advness, socialskillness, luckiness};

    for(const prop in stats) {
        num = Math.floor((Math.random()*5)+1);
        if (num > rSum){
            num = rSum;
        }
        rSum -= num;
        stats[prop] = num;
    }

    const pets = await Pet.find();
    const matchedPets = (pets.map((p) => 
        {return p.name.toLowerCase();}));
    console.log(matchedPets);
    if ((matchedPets.includes(petName.toLowerCase()))) {
        res.render("details/"+petName.toLowerCase(), {stats})
    }
    else {
        res.send("Pet not found");
    }
});

module.exports = router;