import React, { Component } from 'react';
import './App.css';
import Products from './components/Products/Products'
import SearchFilter from './components/Products/search-filter/SearchFilter'
import Category from './components/Products/Category/Category'
class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selection: [],
    productsData: null,
    dairySel: null
  }
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


      const searchFilter = <SearchFilter />

      return (
        <div className="App">
          <p>Hello</p>
<<<<<<< HEAD
          {searchFilter}
=======
          <button onClick={() => this.filter('dairy')}>Dairy</button>
          <button onClick={() => this.filter('protein')}>Protein</button>

          <a href="/auth/google">Sign in with Google</a>
>>>>>>> ad05e6eee6df610ef14d9bfcd410d69be9bcc357
          {productsList}
          {selectionList}
        </div>
      );
    }
  }
}

export default App;
