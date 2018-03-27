import React from 'react';
import '../../assets/RadioInput.css';

function RadioInput({ selected, inputValue, inputType, handleClick }) {
  return(
    <div className="radio-wrapper">
      <label className={ selected === inputValue ? 'label selected' : 'label' }>
        <input
          className="radio"
          type="radio"
          name={ inputType }
          id={ inputValue }
          value={ inputValue }
          onChange={ handleClick }
        />
        { inputValue }
      </label>
    </div>
  )

}

export default RadioInput;
