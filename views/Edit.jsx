const React = require('react')

class Edit extends React.Component {
  render() {
    const honey = this.props.honey
    return (
        <div>
            <h1>Edit Pastry</h1>
          
            <form action={`/biba/${honey.id}?_method=PUT`} method="POST">
              Name: <input value={honey.name} type="text" name="name" /><br/>
              Price: <input value={honey.price} type="text" name="price" /><br/>
              Recipie: <input value={honey.text} type="text" name="text" /><br/>
              Image: <input value={honey.img} type="text" name="image" /><br/>
              <input type="submit" name="" value="Update"/>
            </form>
                             <nav>
                              <a href='/biba/'>Home</a>
                              </nav>
        </div>)}
  }
module.exports = Edit
//create new page
//study why update goes to show