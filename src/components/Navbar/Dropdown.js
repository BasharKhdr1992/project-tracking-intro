import React from 'react';
import './Dropdown.css';
import Divider from './Divider';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown-link">Product</button>
      <button className="dropdown-link">Features</button>
      <button className="dropdown-link">Pricing</button>
      <Divider />
      <button className="dropdown-link login">Login</button>
    </div>
  );
};

export default Dropdown;
