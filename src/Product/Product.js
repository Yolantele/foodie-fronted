import React from 'react'
import classes from './Product.css';

const Product = (props) => {

  return (
    <div className={classes.Product}>
    <p>Product name: {props.name}</p>
    </div>
  )
};

export default Product;
