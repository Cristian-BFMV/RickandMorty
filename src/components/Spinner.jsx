import React from 'react';
import SpinnerStyles from '../styled/Spinner';

const Spinner = () => (
  <SpinnerStyles>
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  </SpinnerStyles>
);

export default Spinner;
