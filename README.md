# BibalaHoney

----------
Honey Pastry Store

----------

## Getting started / Prerequistes
----------

### Create these files and folders

- server.js
- .env
- .gitignore ( move created .env and node_modules/ into here)

- (folder) views (for react jsx files)
   -- Index.jsx
   -- Show.jsx
- (folder) model (for js/ schemas)
    --honey.js


### Instals in the Node terminals

- npm init -y
- npm i express (dependecy)
- npm i dotenv
- npm install express-react-views react@16 react-dom@16 --save
- npm i method-override
- npm i mongoose


----------

## Installing / Attempts / bugs
------
### .env
-type: PORT=3000

### Server.js starter
1. type: const express = require('express')

2. const app = express()

3. const port = process.env.PORT || 3003

4. app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)}) (must stay at the bottom)

5. app.set('view engine', 'jsx')

6. app.engine('jsx', require('express-react-views').createEngine())

7. require('dotenv').config()

8. app.use(express.urlencoded({ extended: true }));

9. app.use(methodOverride('_method'))

10. in terminal type nodemon to test,  in internet browser type localhost:3000/ OR ctrl click the localhost in terminal

11. type: const Honey = require('./model/honey.js') to connect your model/js to ther server

12. app.get('/biba', (req, res) => { 
    -res.render('Index', {honey: honey})
  - })

13. app.get('/biba/new', function (req,res){ 
    //form to create a new pokemon
    res.render('New') (to make a new pastry)
- })

14. app.get('/biba/:id', function(req, res){
   
    }) (to delete and destroy)






### Index.jsx

-many isues insued where I tried to make flex, grid both and neither in css along with the set concept of the text container itself. I did so much reserch on how to overlap everything to get this output:

![Reference 1](ref1.jpg)

Reference videos and websites: 

- (Overlapping CSS grid)  https://www.youtube.com/watch?v=HFG3BKOqOlE
- (Guide to grid) https://css-tricks.com/snippets/css/complete-guide-grid/
- (Guide to flexbox) https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- (How to overlap divs) https://css-tricks.com/how-to-stack-elements-in-css/

I tried multiple things to simply get them to sit on top of eachother


### Mongoose

- MongoDB
- Create new project (free)'
- New Cluster name
- Username and pasword for database
- scroll down for current IP address > confirm
- side bar left> Network Access> EDIT> allow acces fron anywhere > confirm
- Atlas>Connect>Connect your Application
- Copy and paste the code into your .env
- replace '<password>' in mongoose .env code with password you created
- npm i mongoose in Terminal
-  Type in server top: 
- const mongoose = require('mongoose')
- mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
- mongoose.connection.once('open', ()=> {
-    console.log('connected to mongo')
- })
- In Honey.js(model) at top type: const mongoose = require('mongoose')

### Heroku
- So app can work aestheiclly 
- node -v
- make sure heroku is installed
- heroku  create (name)
- remote - v
- git add .
- git commit
- git push heroku main
- settings > reveal > key = MONGO URI, URL info in .env
- update in package. json of latest node
- Add to Package.json below versions: 
  "engines": {
    "node": "14.17.0"
  },




### JavaScript

Sadly I never even got the text to translate to the html even though it's linked properly. Somehow lines 1, 19, 20 and 55 refeuse to communicate. textNodes hold arrays of objects where if acted upon the foreach should react to each option. But I've been stuck with even showing

---------
## Goals
---------
I will make a function storing the selections that hold value. For example: if user makes the right choice you gain a part and get 10 more robot strength. Otherwise it would show you loose 10 robot strength from either a bad trade or loss. I hope to display inventory as well as the percentage. Hopefully if I get all of this to work items may go missing from a character who steals them. Then at the end you chose to fight with whatever percentage strength you robot is. For now im not including firepower and assuming both is at an equal fire power. ( may use space battle for help.)
