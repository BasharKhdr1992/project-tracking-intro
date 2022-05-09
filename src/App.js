import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/main';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <div className="background" />
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
