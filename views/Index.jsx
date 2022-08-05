const React = require('react')

    class Index extends React.Component {
      render() {
          const {honey} = this.props
          //this.props is whatever the stored value
          //honey is a stored value???
          return (
                  <div>
                      <h1>Welcome to the Cafe</h1>
                      <ul>
                          {honey.map((pastry, i) => {
                            //map is an array method and goes through each to do what you want to each
                              return (
                                //for each make them a link
                                  <li>
                                        <a href={`/biba/${pokemon.id}`}>
                                        {pastry.name.charAt(0).toUpperCase() + pastry.name.slice(1)}
                                        </a><br/>
                                        <form action={`/biba/${pokemon.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button></form>
                                        <a href={`/biba/${pokemon.id}/edit`}>Edit Dessert </a>
                                  </li>
                                  //above to add apital to each name in array
                              )
                          })}
                      </ul><br/>
                      <a href="/biba/">Create a Pokemon</a>

                  </div>
          )
      }
    }
    module.exports = Index