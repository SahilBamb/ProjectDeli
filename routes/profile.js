const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const bcrypt = require('bcrypt');
const flash = require('connect-flash'); // for Flash Messages

router.use(express.static('static/nav'));
router.use(express.static('static/profile'));

const {User,Pet,Item,RealPet} = require('../models/exportAllModels');

router.get('/', async (req, res) => {
    const user = res.locals.user
    const realpets = await RealPet.find({
        _id: {
            $in: user.pets
    }});
    const matchingFieldValues = realpets.map(rp => rp.species);
    const pets = await Pet.find({ _id: { $in: matchingFieldValues } });
    const items = await Item.find({});
    res.render('profile/profile.ejs', { user, realpets, pets, items });
});

router.get('/login', async (req, res) => {
    res.render('./profile/login');
});

router.post('/login', async (req, res) => {
    const { name,password } = req.body;
    const username = await User.findOne({name: name});
    const validPassword = await bcrypt.compare(password, username.password);
    if (!validPassword) {
        req.flash('error', 'Incorrect username or password');
        res.redirect('/profile/login');
    }
    else {
        res.cookie('name', username, {signed: true});
        req.flash('success', 'Successfully logged in');
        res.redirect('/home');
    }
});

router.get('/register', async (req, res) => {
    res.render('./profile/register');
    // const newItem = new Item(req.body);
    // await newItem.save();
    // res.render("/items/all");
});

router.post('/register', async (req, res) => {
    const {name, password } = req.body;
    if ((name.length < 4) || (password.length < 4 )) {
        req.flash('error', 'Please enter a valid username and password');
        res.redirect('/profile/register');
    }
    else {
        const hash = await bcrypt.hash(password, 12);
        const newUser = await new User({name : name, password: hash});
        await console.log(newUser)
        await newUser.save();
        req.flash('success', 'Successfully registered');
        res.redirect('/home');
    }
});

module.exports = router;