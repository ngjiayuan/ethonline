import React from 'react';
import './pages/NavBar.css';
const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
