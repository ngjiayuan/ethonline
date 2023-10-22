import React from 'react';
import './pages/NavBar.css';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/buy'>Buy</Link>
        </li>
        <li>
          <a href='#section3'>Section 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
