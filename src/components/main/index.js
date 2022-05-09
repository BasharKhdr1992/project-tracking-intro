import React from 'react';
import devices from '../../images/illustration-devices.svg';
import './index.css';

const index = () => {
  return (
    <div className="body">
      <div className="body-text">
        <header>
          <div className="row-container">
            <span className="tag">New</span>
            <p className="small-para">Monograph Dashboard</p>
          </div>
          <h1 className="heading">Powerful insights into your team</h1>
        </header>
        <main>
          <p className="paragraph">
            Project planning and time tracking for agile teams
          </p>
          <div className="row-container">
            <button className="btn btn-primary">Schedule a demo</button>
            <p className="small-para">to see a live preview</p>
          </div>
        </main>
      </div>
      <div className="img-container">
        <img src={devices} alt="devices illustration" />
      </div>
    </div>
  );
};

export default index;
