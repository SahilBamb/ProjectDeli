const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    color: { type: String, default: 'vanilla'},
    imgtrans: { type: String },
    inactive: { type: Boolean, default: false }
});

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;