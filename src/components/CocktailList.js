import React, { Component } from 'react';
import request from 'superagent'

export default class CocktailList extends Component {
    
    state = { cocktails: null }

    componentDidMount() {
        request
          .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
          .then(response => {
              const cocktails = response.body.drinks.map(response => {return response.strCategory})
              console.log(cocktails)
              this.updateCocktailslist(cocktails)
          })
          .catch(console.error)
      }

      updateCocktailslist(cocktails) {
        this.setState({
            cocktails: cocktails
        })
        console.log(cocktails)
      }

    rederCocktailList(cocktail) {
        return <li key={cocktail}>
                {cocktail}
                </li>
    }

    render(){
        return <div className="cocktails-list">
                <h1>List of Cocktails</h1>
                <ul>
                    //{cocktails.map(this.rederCocktailList)}
                </ul>}
                </div>
        
    }
}


// <div className="dogs-list">
// <h1>Dogs List</h1>
// { dogBreeds === null ? 'Loading...' : <ul>
//     {dogBreeds.map(this.rederDogBreed)}
// </ul>}
// </div>