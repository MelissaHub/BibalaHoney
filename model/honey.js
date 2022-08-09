const mongoose = require('mongoose')
//to generate unique ID

//names,price,description,image
//Schema is abstract description what will go into database
// true because it has to be in there to reate
const pastrySchema = new mongoose.Schema({ 
    name: { type: String, required: true},
    price:{type: String, required: true},
    text:{type: String, required: true},
    img:{type: String, required: true},
})

const Pastry = mongoose.model('Pastry', pastrySchema)
///??????




 module.exports = Pastry
 //Mke sure CAPITAL