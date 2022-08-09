const React = require('react')

const myStyle = {
   color: '#ffffff',
   backgroundColor: '#000000',
 }

    class Show extends React.Component {
      render() {

          const {honey} = this.props
          //destructre it {pokemon}
          //this.props is whatever the stored value is
          return (
                  <div>
                      <h1>Here is your Desserts!</h1>
                      <h2>Let's eat {honey.name}!</h2>
                      <img src={`http://img.pokemondb.net/artwork/${honey.name.toLowerCase()}.jpg`}></img><br/>

                      <p> This is what is in your Dessert</p>

                      <a href = "/biba/new">Create a Pokemon</a><br/>
                      <a href = "/biba">BACK</a>

                  </div>
                  //.jpeg to finish images
          )
      }
    }
    module.exports = Show