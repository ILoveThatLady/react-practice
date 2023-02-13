import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav  className='nav'>
        <div>
          <img src='https://raw.githubusercontent.com/ILoveThatLady/react-practice/cea9477c2adcba8cb930b00bece9f4d95c685808/reactInfoSite/src/assets/react-2.svg' className='rLogo'/>
          <h3>ReactFacts</h3>
        </div>
        <h4>React - Practice 1</h4>
      </nav>
    </div>
  )
};

export default Navbar;
