const React = require('react')

class Edit extends React.Component {
  render() {
    const honey = this.props.honey
    return (
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Edit Pastry</title>
              <link rel="stylesheet" href="/CSS/newstyle.css"></link>
</head>
<body>
        
<div className ='parent'>
            <h1>Edit Pastry</h1>
          
            <form action={`/biba/${honey.id}?_method=PUT`} method="POST">
              Name: <input value={honey.name} type="text" name="name" /><br/>
              Price: <input value={honey.price} type="text" name="price" /><br/>
              Recipie: <input value={honey.text} type="text" name="text" /><br/>
              Amount: <input value={honey.total} type="number" name="total" /><br/>
              Image: <input value={honey.img} type="text" name="image" /><br/>
              <input className ='input' type="submit" name="" value="Update"/>
            </form>
                             <nav>
                              <a href='/biba/'>Home</a>
                              </nav>
        </div>
</body>
</html>
      )}
  }
module.exports = Edit
//create new page
//study why update goes to show
//prepoulated value
