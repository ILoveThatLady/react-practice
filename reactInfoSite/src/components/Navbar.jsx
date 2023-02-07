import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav  className='nav'>
        <div>
          <img src='src\assets\react-2.svg' className='rLogo'/>
          <h3>ReactFacts</h3>
        </div>
        <h4>React - Practice 1</h4>
      </nav>
    </div>
  )
};

export default Navbar;
