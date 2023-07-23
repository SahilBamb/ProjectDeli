const mongoose = require('mongoose');
const Item = require('../models/item');
const Pet = require('../models/pet');


// connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/DemiApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => console.log('Connected to MongoDB'))
.catch(err => {
    console.log('Error connecting to MongoDB', err.message);
})

//Individual Items

// const p = new Item({
//     name:'Basic Jar',
//     price:'1000',
//     category:'jar',
//     imgtrans:'https://s.mj.run/uPlr3esf37A'});

// p.save().then(p => {console.log(p);}).catch(err => {
//     console.log(err);});

// const allItems = [
//     {name:'Basic Jar',price:'1000',category:'jar',imgtrans:'https://s.mj.run/uPlr3esf37A'},
//     {name:'Basic Orb',price:'1000',category:'orb',imgtrans:'https://s.mj.run/EGZ4-hwhOQ4'},
//     {name:'Basic Totem',price:'1000',category:'totem',imgtrans:'https://s.mj.run/yfTD52OZ_DY'}
// ];

// Item.insertMany(allItems).then(res => {
//     console.log(res);
// }

// ).catch(err => {
//     console.log(err);
// });

// model = Item and list = {item1, item2, item3}


// const p = new Item({
//     name:'Basic Jar',
//     price:'1000',
//     category:'jar',
//     imgtrans:'https://s.mj.run/uPlr3esf37A'});


const allPets = [
    {name:'Razortooth',
    img:'https://media.discordapp.net/attachments/1060071572280442964/1062263772401631272/fn_neopets_shark_d5168750-cc8a-4e09-8659-748a94e2837f.png',
    imgtrans:'https://github.com/SahilBamb/ProjectDeli/assets/42818731/7c61bd80-05d4-466f-a206-6fbf7a4ac4c6'},
    
    {name:'Nervish',
    img:'https://media.discordapp.net/attachments/1060071572280442964/1062269332375228526/fn_neopets_cute_jellyfish_0ceba0e6-eb01-4b40-9b50-d8a37882ae42.png',
    imgtrans:'https://github.com/SahilBamb/ProjectDeli/assets/42818731/f47c94ac-2133-4aa3-ad68-d8844aa0373b'}
];

function insertType(model, list){

    model.insertMany(list).then(res => {
            console.log(res);
        }
        
        ).catch(err => {
            console.log(err);
        });
    
}

insertType(Pet, allPets);