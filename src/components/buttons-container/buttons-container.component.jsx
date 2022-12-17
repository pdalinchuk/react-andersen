import React from 'react';
import Button from '../button/button.component.jsx';
import './buttons-container.styles.css';

class ButtonsContainer extends React.Component {
  render() {
    return (
      <div className='btn-container'>
        <Button
          text='Сохранить'
          type='submit'
          onClick={this.props.handleForm}
        />
        <Button text='Отмена' type='clear' onClick={this.props.handleForm} />
      </div>
    );
  }
}

export default ButtonsContainer;
