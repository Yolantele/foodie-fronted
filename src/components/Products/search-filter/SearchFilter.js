import React from 'react';
import './SearchFilter.css';

const SearchFilter = (props) => {

  return (
    <div className="SearchFilter">
      <h4>Filter Product Search</h4>
      <form>
      <h5>
        <div className="form-group">
          <label htmlFor="type">By Type </label>
          <input type="text" className="form-control" name="type" required />
          <label htmlFor="price">By Price </label>
          <input type="text" className="form-control" name="price" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </h5>
      </form>
    </div>
  )
}



export default SearchFilter;
