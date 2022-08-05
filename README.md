# BibalaHoney

----------
My intentions was to make a story choice game where the user has to haggle items for parts to their robot. In recording the users choices at the end with a final score between 1-100 it'll determine if you got enough parts strong enough to beat the random output opponet. I followed Web Dev simplified to get the skeletal references on how to set up the story mode.

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

8. in terminal type nodemon to test,  in internet browser type localhost:3000/ OR ctrl click the localhost in terminal

9. type: const Honey = require('./model/honey.js') to connect your model/js to ther server



### Index.jsx

-many isues insued where I tried to make flex, grid both and neither in css along with the set concept of the text container itself. I did so much reserch on how to overlap everything to get this output:

![Reference 1](ref1.jpg)

Reference videos and websites: 

- (Overlapping CSS grid)  https://www.youtube.com/watch?v=HFG3BKOqOlE
- (Guide to grid) https://css-tricks.com/snippets/css/complete-guide-grid/
- (Guide to flexbox) https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- (How to overlap divs) https://css-tricks.com/how-to-stack-elements-in-css/

I tried multiple things to simply get them to sit on top of eachother


### JavaScript

Sadly I never even got the text to translate to the html even though it's linked properly. Somehow lines 1, 19, 20 and 55 refeuse to communicate. textNodes hold arrays of objects where if acted upon the foreach should react to each option. But I've been stuck with even showing

---------
## Goals
---------
I will make a function storing the selections that hold value. For example: if user makes the right choice you gain a part and get 10 more robot strength. Otherwise it would show you loose 10 robot strength from either a bad trade or loss. I hope to display inventory as well as the percentage. Hopefully if I get all of this to work items may go missing from a character who steals them. Then at the end you chose to fight with whatever percentage strength you robot is. For now im not including firepower and assuming both is at an equal fire power. ( may use space battle for help.)
