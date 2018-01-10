import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product'

class App extends Component {
  state = {
    products: [
    {id:1, name: 'Pancake', quantity: '10', price: '5', date: '01/12/17'},
    {id:2, name: 'p2', quantity: '11', price: '1', date: '02/12/17'},
    {id:3, name: 'p3', quantity: '12', price: '2', date: '03/12/17'}]
  }

  render() {
    const products = this.state.products.map( (product) => {
      return <Product name={product.name}
        quantity={product.quantity}
        price={product.price}
        date={product.date}
        key={product.id}
        />
    })

    return (
      <div className="App">
      {products}
      </div>
    );
  }
}

export default App;
