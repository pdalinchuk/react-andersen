import React from 'react';
import './textarea.styles.css';

class TextArea extends React.Component {
  render() {
    return (
      <div className='form-group'>
        <label className='form-label' htmlFor={this.props.name}>
          {this.props.title}
        </label>
        <textarea
          className='form-textarea'
          rows={this.props.rows}
          id={this.props.name}
          placeholder={this.props.placeholder}
        ></textarea>
      </div>
    );
  }
}

export default TextArea;
