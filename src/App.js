import React, { Component } from 'react';
import './App.css';
import Products from './components/Products/Products'

class App extends Component {

  state = {
    title: 'pancakes'
  }
  componentDidMount(){
    fetch('http://localhost:5000/api/products')
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          productsData: data
        })
      })
  }

  render() {
    if (!this.state.productsData) {
      return <p> Loading Products...</p>
    } else {

      const productsList = <Products
        products={this.state.productsData}
      />

      return (
        <div className="App">
          <p>Hello</p>
          {productsList}
        </div>
      );
    }
  }
}

export default App;
