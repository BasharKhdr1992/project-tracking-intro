import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';
import './index.css';
import Dropdown from './Dropdown';

const Index = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-right">
        <button className="navlink collapse">Product</button>
        <button className="navlink collapse">Features</button>
        <button className="navlink collapse">Pricing</button>
        <span className="navbar-divider collapse">.</span>
        <button className="navlink login collapse">Login</button>
        <img
          src={dropdown ? close : hamburger}
          onClick={toggleDropdown}
          className="mobile"
          alt="mobile navbar icon"
        />
        {dropdown && <Dropdown />}
      </div>
    </nav>
  );
};

export default Index;
