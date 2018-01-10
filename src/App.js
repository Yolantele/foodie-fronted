import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product'

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
      const products = this.state.productsData.map( (product) => {
        return <Product
          name={product.name}
          quantity={product.quantity}
          price={product.price}
          date={product.date}
          key={product.id}
          />
      })
      return (
        <div className="App">
          <p>Hello</p>
          {products}
        </div>
      );
    }
  }
}

export default App;
