import React, { Component } from 'react';
import '../../assets/App.css';

import RadioInput from './RadioInput';
import TextInput from './TextInput';
import Button from './Button';

import { inputData } from '../utilities/data';
import { calculateBodyFat } from '../utilities/functions'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: 'female',
      weight: '',
      tricep: '',
      suprailiac: '',
      age: '',
      thigh: '',
      umbilicus: '',
      total: ''
    }
  }

  handleRadioClick = (e) => {
    let val = e.target.value;
    this.setState({ gender: val });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: parseFloat(e.target.value) });
  }

  handleButtonClick = () => {
    let total = calculateBodyFat(this.state)
    this.setState({ total });
  }

  render() {

    return (
      <div className="App">
        <section>
          SP
        </section>
        <hr />
        <div className="field-wrapper">
          <RadioInput
            inputValue='female'
            inputType='radio'
            selected={ this.state.gender }
            handleClick={ this.handleRadioClick }
          />
          <RadioInput
            inputValue='male'
            inputType='radio'
            selected={this.state.gender}
            handleClick={this.handleRadioClick}
          />
        </div>
        <div className='form-wrapper'>
          { inputData.map(el =>
            <TextInput
              inputType={ 'number' }
              key={ el.id }
              inputName={ el.inputName }
              handleChange={ this.handleChange }
              keepDirty={ this.state[el.inputName] }
            />
          )}
        </div>
      <Button
        buttonText="Calculate"
        handleClick={ this.handleButtonClick }
      />
      <div>{ this.state.total }</div>
      </div>
    );
  }
}

export default App;
