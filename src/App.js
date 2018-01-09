import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Product name='Pancake'/>
      </div>
    );
  }
}

export default App;
