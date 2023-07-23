const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DemiApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => console.log('Connected to MongoDB'))
.catch(err => {
    console.log('Error connecting to MongoDB', err.message);
})

const User = mongoose.model('user', { name: String, password: String, money: Number, pets: [{type: mongoose.Schema.Types.ObjectId, ref: 'realpet'}], items: [{type: mongoose.Schema.Types.ObjectId, ref: 'item'}] });
const Pet = mongoose.model('pet', { name: String, img: String, imgtrans: String, background: String, gradLeft: String, gradRight: String });
const Item = mongoose.model('item', { name: String, price: Number, category: String, imgtrans: String });
const RealPet = mongoose.model('realpet', { nickname: String, species: {type: mongoose.Schema.Types.ObjectId, ref: 'Pet'}});

const makeRealPet = async () => {
    const draco = await Pet.findOne({name: 'Draco'});
    const realpet = new RealPet({nickname: 'Shyoru', species: draco._id});
    const user = await User.findOne({name: 'Sahil'});
    await user.pets.push(realpet);
    await user.save();
}

makeRealPet();

