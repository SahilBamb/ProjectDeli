const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        default: 0
    },
    items : [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }],
    pets : [{
        type: [Schema.Types.ObjectId],
        ref: 'realPet'
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;