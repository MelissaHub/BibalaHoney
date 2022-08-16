const React = require('react')

    class Index extends React.Component {
      render() {
          const {honey} = this.props
          console.log(honey)
          //this.props is whatever the stored value
          //THIS IS TO DECONSTRUCT THE CONSTRUCTED ARRAY IN FIRST INDEX
          return (
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>CAFE</title>
              <link rel="stylesheet" href="/CSS/indexstyle.css"></link>
            </head>
            <body>
            <div className ='parent'>
                      {/* <h1>Welcome to the Cafe</h1>
                       */}
                       <div className = 'title'> Title</div>
                      <div className = 'list'>
                          {honey.map((pastry) => {
                            //map is an array method and goes through each to do what you want to each
                            //honey is array, pastry is INDIVIUAL INDEX
                              return (
                                <a className = 'button' href = {`/biba/${pastry.id}`}>
                                                                
                                  <div className = 'pastry'>
                                        <h2 class = 'name'>
                                        {pastry.name.charAt(0).toUpperCase() + pastry.name.slice(1)}
                                        </h2><br/>
                                        <a href={`/biba/${pastry.id}/edit`}>Edit Dessert </a>
                                        <form action={`/biba/${pastry.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button></form>
                                  </div>
                           
                                </a>

                              )
              
                          })}
                                                  <div className = 'bee'> bee</div>
                      </div><br/>
                      <a href="/biba/new"><button className = 'create'>Create Pastry</button></a>

                  </div>
            </body>
            </html>

          )
      }
    }
    module.exports = Index