const React = require('react')

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>Make a Pastry</h1>
          
            <form action="/biba" method="POST">
              Name: <input type="text" name="name" /><br/>
              Price: <input type="text" name="price" /><br/>
              Recipie: <input type="text" name="text" /><br/>
              Image: <input type="text" name="image" /><br/>
              <input type="submit" name="" value="Create Pastry"/>
            </form>
                             <nav>
                              <a href="/biba">Home</a>
                              </nav>
        </div>)}
  }
module.exports = New
//create new page