const React = require('react')

    class Index extends React.Component {
      render() {
          const {honey} = this.props
          console.log(honey)
          //this.props is whatever the stored value
          //THIS IS TO DECONSTRUCT THE CONSTRUCTED ARRAY IN FIRST INDEX
          return (
                  <div>
                      <h1>Welcome to the Cafe</h1>
                      
                      <ul>
                          {honey.map((pastry) => {
                            //map is an array method and goes through each to do what you want to each
                            //honey is array, pastry is INDIVIUAL INDEX
                              return (
                                //for each make them a link
                                  <li>
                                        <a href={`/biba/${pastry.id}`}>
                                        {pastry.name.charAt(0).toUpperCase() + pastry.name.slice(1)}
                                        </a><br/>
                                        <form action={`/biba/${pastry.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button></form>
                                        <a href={`/biba/${pastry.id}/edit`}>Edit Dessert </a>
                                  </li>
                                  //above to add apital to each name in array
                              )
                          })}
                      </ul><br/>
                      <a href="/biba/new">Create a Pastry</a>

                  </div>
          )
      }
    }
    module.exports = Index