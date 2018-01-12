import React from 'react';
import './SearchFilter.css';

const SearchFilter = (props) => {

  return (
    <div className='SearchFilter'>
      <h4>Filter Product Search</h4>
      <form>
        <div class="form-group">
          <label for="type">By Type</label>
          <input type="text" class="form-control" name="type" required />
          <label for="price">By Price</label>
          <input type="text" class="form-control" name="price" required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}



export default SearchFilter;
