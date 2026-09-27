import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className="background-container">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="grid-overlay"></div>
    </div>
  );
};

export default Background;
