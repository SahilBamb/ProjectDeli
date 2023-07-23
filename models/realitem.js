const mongoose = require('mongoose');
const realitemSchema = new mongoose.Schema({
    nickname: {type: String},
    item: {type: mongoose.Schema.Types.ObjectId, 
    ref: 'Item'},
});

const RealItem = mongoose.model('RealItem', realitemSchema);
module.exports = RealItem;