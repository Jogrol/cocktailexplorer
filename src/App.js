import React, { Component } from 'react';
import CocktailList from './components/CocktailList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cocktail Explorer</h1>
        
        </header>
        <main>
          <CocktailList/>

        </main>
      </div>
    );
  }
}

export default App;
