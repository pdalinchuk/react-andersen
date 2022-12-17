import React from 'react';
import ErrorMessage from '../error-message/error-message.component';
import './input.styles.css';

class Input extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <label className='form-label' htmlFor={this.props.name}>
          {this.props.title}
        </label>
        <input
          className='form-input'
          id={this.props.name}
          placeholder={this.props.placeholder}
          type={this.props.inputType}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        {this.props.errorMsg && <ErrorMessage text={this.props.errorMsg} />}
      </div>
    );
  }
}

export default Input;
