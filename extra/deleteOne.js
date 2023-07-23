const mongoose = require('mongoose');
const Item = require('../models/item');
const Pet = require('../models/pet');
const User = require('../models/user');

// connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/DemiApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => console.log('Connected to MongoDB'))
.catch(err => {
    console.log('Error connecting to MongoDB', err.message);
})

// Filter to find the document(s) you want to update
const filter = { name: "Sahil" }; // Replace '...' with the document ID you want to update

// The update operation
const updateOperation = {
$set: { pets: [] }, // Replace 'attributeName' with the name of the attribute you want to update
};

// Perform the update
const result = await User.findOneAndUpdate(filter, updateOperation);

User.save();