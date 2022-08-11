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
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

const pastryData = require('./utilities/pastrydata.js')
//this is seed route!

const Pastry = require('./model/honey.js')



app.get('/biba', (req, res) => { 
    //list of all things in index
    //each get reps a new page
    Pastry.find({},(error,allPastry) => {
        //.find is to find all the empty objects, if non return param error
        res.render('Index',{honey: allPastry})
        //render index view but pass allPastry empty objects now called honey

    } )

})
app.post('/biba', (req, res) => { 
    //req (request)- req.body is whatever is in the form res(response) res.post is to post it

    Pastry.create(req.body, (error,createdPastry) =>{
        res.redirect('/biba')
    })
})

app.get('/biba/seed', (req,res) => {
    //COMMENT OUT SEED LATER
    //to post already make pastrydata?
    //if anything in there, delete, also wait til is finished to do so
    // await Pastry.deleteMany({})
     Pastry.create(pastryData)
    // await Honey.deleteMany({name: /saur/})
    res.redirect('/biba')
    //create list of pastry in database
 })


app.get('/biba/new', function (req,res){ 
    //form to create a new pastry from INDEX
    //add page
    //get pulls infromation from jsx
    res.render('New')
})


app.get('/biba/:id/edit', function(req, res){
    //get to pull up infomation already there
    //to update the information from SHOW page id
    //editing a posted from from show page
    //EDIT.JSX
    Pastry.findById(req.params.id, (error, foundPastry) => { 

        if(!error){
        res.render('Edit', { 
            honey: foundPastry
        })
    }
    else ( 
        res.send({ 
            message: errorMessage
        })
    )
    })
})

app.put('/biba/:id', (req, res) => {
    //put updates and corrects the infomation. METHOD OVERWRITE
    Pastry.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, pastry) => {
        res.redirect(`/biba/${req.params.id}`)//send to show page /biba/id
    })
})


app.get('/biba/:id', function(req, res){
    //id is list of each thing in list
    //all things about indiviual product
    //suggest have edit and delete in here
    //to get the userinput form
    //used with the put
    //SHOW PAGE
    Pastry.findById(req.params.id,(error,foundPastry) => {

        res.render('Show', {
            honey: foundPastry
        })
    })
    

})

app.delete('/biba/:id', function(req, res){
    //to delete indiviual pastry

    //honey is calling the datatbase schema?
    Pastry.findByIdAndRemove(req.params.id, (err,data) => { 
        res.redirect('/biba')
    })

    //     res.render('Show', {
    //         honey: foundDesserts
    //     })
    })
    
    // assigning /pokemon and index in the pokemon array
    //calling Show.jsx
    //render prints them





//ref to port.process MUST STAY AT BOTTM
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
}) //show up as a hyper link



// INDEX when a user types 
// NEW when a user types 
// DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to deletea product
// UPDATE initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to Updatedata about a product
