import React from 'react';
import '../../assets/Button.css';

function Button({ handleClick, buttonText }) {
  return(
    <button
      className="button"
      type="button"
      onClick={ handleClick }>
      { buttonText }
    </button>
  )

}

export default Button;
