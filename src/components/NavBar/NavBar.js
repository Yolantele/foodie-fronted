import React from 'react';
import './NavBar.css';

const NavBar = (props) => {

  const pages = ['Foodie', 'Search', 'Google Login', 'Logout'];
  const navLinks = pages.map(page => {
    return (
      <a href={'/' + page}>
        {page}
      </ a>
    )
  });
  return <nav>{navLinks}</nav>;
}

export default NavBar;
