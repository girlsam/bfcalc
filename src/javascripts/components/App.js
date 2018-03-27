import React, { Component } from 'react';
import '../../assets/App.css';

import RadioInput from './RadioInput';
import TextInput from './TextInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'female',
      weight: '',
      tricep: '',
      suprailiac: '',
      age: '',
      thigh: '',
      umbilicus: ''
    }
  }

  handleClick = (e) => {
    let val = e.target.value;
    this.setState({ selected: val });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="field-wrapper">
          <RadioInput
            inputValue='female'
            inputType='radio'
            selected={ this.state.selected }
            handleClick={ this.handleClick }
          />
          <RadioInput
            inputValue='male'
            inputType='radio'
            selected={this.state.selected}
            handleClick={this.handleClick}
          />
        </div>
        <TextInput
          placeholderText='Weight'
          inputName='weight'
          handleChange={ this.handleChange }
        />
        <TextInput
          placeholderText='Age'
          inputName='age'
          handleChange={ this.handleChange }
        />
        <TextInput
          placeholderText='Tricep'
          inputName='tricep'
          handleChange={ this.handleChange }
        />
        <TextInput
          placeholderText='Suprailiac'
          inputName='suprailiac'
          handleChange={ this.handleChange }
        />
        <TextInput
          placeholderText='Umbilicus'
          inputName='umbilicus'
          handleChange={ this.handleChange }
        />
        <TextInput
          placeholderText='Thigh'
          inputName='thigh'
          handleChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
