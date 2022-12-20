import React from 'react';
import './button.styles.css';

class Button extends React.Component {
  render() {
    return (
      <button
        className={`btn ${
          this.props.type === 'clear' ? 'btn-clear' : 'btn-submit'
        }`}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
