import React from 'react';
import '../Loader.css';
import animation from '../assets/animation.gif';

const Loader = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div className="loader-container">
      <div className="loader">
        <img src={animation}></img>
        {/* Your loading animation or text goes here */}
        <h1 className={`text-black text-center`}>Please be patient</h1>
        <h1 className={`text-black text-center`}>InfluBrain loads all the neccesary information</h1>
        <h1 className={`text-black text-center`}>This process should take less than 5 minutes</h1>
      </div>
    </div>
  );
};

export default Loader;