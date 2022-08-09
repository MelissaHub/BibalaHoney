const express = require('express')
const app = express()
const port = process.env.PORT || 3003
require('dotenv').config()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//if mongoose error delete if depreciation error useNewUrlParser: true, useUnifiedTopology: true
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

const pastryData = require('./utilities/pastryData')
//this is seed route!

const Honey = require('./model/honey.js')



app.get('/biba', (req, res) => { 
    //list of all things in index
    //each get reps a new page
    res.render('Index')
    //{honey: honey}
})


app.get('/biba/new', function (req,res){ 
    //form to create a new pastry from INDEX
    //add page
    //get pulls infromation from jsx
    res.render('New')
})

app.get('/biba/:id', function(req, res){
    //id is list of each thing in list
    //all things about indiviual product
    //suggest have edit and delete in here
    //to get the userinput form
    //used with the put
    //SHOW PAGE

})

app.delete('/biba/:id', function(req, res){
    //to delete indiviual pastry
    
    // Honey.findById(req.params.id,(error,foundDesserts) => {

    //     res.render('Show', {
    //         honey: foundDesserts
    //     })
    })
    
    // assigning /pokemon and index in the pokemon array
    //calling Show.jsx
    //render prints them

app.post('/biba/:id/edit', function(req, res){

        //to update the information from SHOW page id
        //editing a posted from from show page
        //EDIT.JSX
    })



//ref to port.process MUST STAY AT BOTTM
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
}) //show up as a hyper link



// INDEX when a user types 
// NEW when a user types 
// DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to deletea product
// UPDATE initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to Updatedata about a product
