import React from 'react';
import '../../assets/TextInput.css';

function TextInput({ handleChange, inputName, placeholderText }) {
  return(
    <div className="text-wrapper">
      <label className="text-input">
        { placeholderText }
        <input
          className="text"
          type="text"
          name={ inputName }
          onChange={ handleChange }
        />
      </label>
    </div>
  )

}

export default TextInput;
