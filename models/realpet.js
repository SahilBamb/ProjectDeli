const mongoose = require('mongoose');
const realpetSchema = new mongoose.Schema({
    nickname: {type: String},
    species: {type: mongoose.Schema.Types.ObjectId, ref: 'Pet'},
    fitness: {type: Number, default: 0},
    happiness: {type: Number, default: 0},
    goodness: {type: Number, default: 0},
    advness: {type: Number, default: 0},
    socialskillness: {type: Number, default: 0},
    luckiness: {type: Number, default: 0}

});

const RealPet = mongoose.model('RealPet', realpetSchema);
module.exports = RealPet;