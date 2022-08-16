const React = require('react')

class New extends React.Component {
  render() {
    return (
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Create a New Pastry!</title>
              <link rel="stylesheet" href="/CSS/newstyle.css"></link>
</head>
<body>
<div className ='parent'>
            <h1>Make a Pastry</h1>
          
            <form action="/biba" method="POST">
              Name: <input type="text" name="name" /><br/>
              Price: <input type="number" name="price" /><br/>
              Recipie: <input type="text" name="text" /><br/>
              Amount: <input type="number" name="total" /><br/>
              Image: <input type="text" name="image" /><br/>
              <input className ='input' type="submit" name="" value="Create Pastry"/>
            </form>
                             <nav>
                              <a href="/biba">Home</a>
                              </nav>
        </div>
</body>
</html>
      )}
  }
module.exports = New
//create new page