import React from 'react';
import './error-message.styles.css';

class ErrorMessage extends React.Component {
  render() {
    return <div className='message'>{this.props.text}</div>;
  }
}

export default ErrorMessage;
