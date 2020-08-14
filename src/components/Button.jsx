import React from 'react';
import ButtonStyles from '../styled/Button';

const Button = ({ text, onClick, className, disable }) => (
  <ButtonStyles>
    <button className={`general-button ${className}`} onClick={onClick} disabled={disable}>
      {text}
    </button>
  </ButtonStyles>
);

export default Button;
