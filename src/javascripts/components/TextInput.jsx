import React, { Component } from 'react';
import '../../assets/TextInput.css';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dirty: false
    }
  }

  handleFocus = () => {
    this.setState({ dirty: true });
  }

  handleBlur = () => {
    (this.props.keepDirty === '' || isNaN(this.props.keepDirty))
    ? this.setState({ dirty: false })
    : this.setState({ dirty: true })
  }

  render() {
    return (
      <div className="text-wrapper">
        <label className="text-input">
          <div className={`title ${this.state.dirty ? 'dirty': null}`}>{ this.props.inputName }</div>
          <input
            className="text"
            type={ this.props.inputType }
            name={ this.props.inputName }
            onChange={ this.props.handleChange }
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
          />
        </label>
      </div>
    );
  }
}

export default TextInput;
