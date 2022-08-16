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
          //made a fragment
          return (

                        <html lang="en">
                        <head>
                          <meta charset="UTF-8" />
                          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                          <title>Here is your Pastry!</title>
                          <link rel="stylesheet" href="/CSS/showstyle.css"></link>
                        </head>
                        <body>
                        <div className ='body'>
                                    <div className ='left'>                                         
                                                          <h1>Let's eat {honey.name}!</h1>
                                                            <img src={honey.img} ></img><br/>
                                                            
                                    </div>

                                    <div className ='right'>
                                      <div className = 'inside'>
                                      <p> {honey.text}</p>

                                        {
                                          honey.total?
                                          <>
                                          <p>Amount: {honey.total}</p>
                                                      <p>Price: ${honey.price}</p>
                                                        <button>BUY</button>
                                                          <a href= {`/biba/${honey.id}/edit`}><button >EDIT</button></a>
                                                              <a href = "/biba">BACK</a>
                                          </>
                                          :
                                          <>
                                                                                <p>OUT OF STOCK</p>
                                                      <p>Price: ${honey.price}</p>
                                                          <a href= {`/biba/${honey.id}/edit`}><button >EDIT</button></a>
                                                              <a href = "/biba">BACK</a>
                                          </>
                                        }                           
                                      </div>

                                    </div>

                       </div>
                                        
                        </body>
                        </html>
          )
      }
    }
    module.exports = Show