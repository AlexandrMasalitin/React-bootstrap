import React, { Component } from 'react';




export default class Info extends Component {


    constructor(props) {
      super(props)
    
      this.state = {

        error: null,
        isLoaded: false,
        items: []

      }

    };

    componentDidMount(){
      fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(res =>res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.drinks

          });
        },
        (error) => {
          this.setState({
            isLoaded:true,
            error 
          })
          
      }
      )
    }
 
  render() {
        const {error, isLoaded, items} = this.state
        if(error) {
          return <p>Error {error.message}</p>
        }else if(!isLoaded){
          return <p>Loading...</p>
        }else{
          return(
              <div className='container-info'>
            <ul>
              {
                items.map(item => (
                  <li className='coctail' key={item.name}>
                    {item.strDrink }
                    <img  className='imgCoctail' width={300} height={300} src={item.strDrinkThumb} alt="img" />
                  </li>
                )
                )
                }  
            </ul>
            </div>
          )
        }
  }
}
