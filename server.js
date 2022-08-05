const express = require('express')
const app = express()
const port = process.env.PORT || 3003
require('dotenv').config()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


const Honey = require('./model/honey.js')









app.get('/biba', (req, res) => { 

})

app.get('/',(req, res) =>{
    res.send('Welcome to BibaLaHoney!')
})



//ref to port.process MUST STAY AT BOTTM
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
}) //show up as a hyper link