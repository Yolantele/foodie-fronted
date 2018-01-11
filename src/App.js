import React, { Component } from 'react';
import './App.css';
import Products from './components/Products/Products'
import Category from './components/Products/Category/Category'

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selection: [],
    productsData: null,
    dairySel: null
  }
  // this.dairy = this.dairy.bind(this);
}

  componentDidMount(){
    fetch('http://localhost:5000/api/products')
      .then(data => data.json())
      .then(data => {
        this.setState({
          productsData: data
        })
      })
  }

  filter = string => {
    if (this.state.productsData) {
      this.state.productsData.map( product => {
        if(product.category === string){
          this.state.selection.push(product);
        };
        this.setState({dairySel: this.state.selection});
      });
    } else {
      return <p> No Dairy Products available</p>
  }
}
  render() {
    if (!this.state.productsData) {
      return <p> Loading Products...</p>
    } else {

      const productsList = <Products
        products={this.state.productsData}
      />
      const selectionList = <Products
      products={this.state.selection}
      />


      return (
        <div className="App">
          <p>Hello</p>
          <button onClick={() => this.filter('dairy')}>Dairy</button>
          <button onClick={() => this.filter('protein')}>Protein</button>

          <a href="/auth/google">Sign in with Google</a>
          {productsList}
          {selectionList}
        </div>
      );
    }
  }
}

export default App;
