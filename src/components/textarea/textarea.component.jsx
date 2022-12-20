import React from 'react';
import ErrorMessage from '../error-message/error-message.component';
import './textarea.styles.css';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.defineMessage.bind(this);
  }

  defineMessage({ maxlength, value }) {
    const residual = maxlength - value.trim().length;
    return residual < 0
      ? 'Превышен лимит символов в поле!'
      : `Осталось ${residual}/${maxlength} символов`;
  }

  render() {
    return (
      <div className='form-group'>
        <label className='form-label' htmlFor={this.props.name}>
          {this.props.title}
        </label>
        <textarea
          className='form-textarea'
          id={this.props.name}
          rows={this.props.rows}
          length={this.props.maxlength}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <div className='counter'>{this.defineMessage(this.props)}</div>
        {this.props.errorMsg && <ErrorMessage text={this.props.errorMsg} />}
      </div>
    );
  }
}

export default TextArea;
