import React from 'react';
import data from '../../data/data.jsx';
import Input from '../input/input.component.jsx';
import TextArea from '../textarea/textarea.component.jsx';
import ButtonsContainer from '../buttons-container/buttons-container.component.jsx';
import './form-container.styles.css';

class FormContainer extends React.Component {
  render() {
    return (
      <form className='form-container'>
        {data.map((element, index) => {
          const { inputType, title, name, placeholder, rows } = element;
          return !rows ? (
            <Input
              inputType={inputType}
              title={title}
              name={name}
              placeholder={placeholder}
              key={index}
            />
          ) : (
            <TextArea
              title={title}
              name={name}
              rows={rows}
              placeholder={placeholder}
              key={index}
            />
          );
        })}
        <ButtonsContainer />
      </form>
    );
  }
}

export default FormContainer;
