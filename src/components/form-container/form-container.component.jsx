import { useState } from 'react';

import Header from '../header/header.component.jsx';
import Input from '../input/input.component.jsx';
import TextArea from '../textarea/textarea.component.jsx';
import ButtonsContainer from '../buttons-container/buttons-container.component.jsx';
import Answers from '../answers/answers.component.jsx';

import data from '../../data/data.jsx';
import { validateForm } from '../../utils.js';

import './form-container.styles.css';

const FormContainer = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    birthday: '',
    phone: '',
    url: '',
    about: '',
    technologies: '',
    lastProject: '',
  };

  const [userInfo, setUserInfo] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const handleValues = (e) => {
    let value = e.target.value;
    let name = e.target.id;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    let target = e.target;
    target.className.includes('btn-clear')
      ? handleClearForm()
      : handleSubmitForm();
  };

  const handleClearForm = () => {
    setUserInfo(initialValue);
    setFormErrors({});
  };

  const handleSubmitForm = () => {
    const { trimmedUserInfo, formErrors } = validateForm(userInfo);
    setUserInfo((prevState) => ({ ...prevState, ...trimmedUserInfo }));
    setFormErrors({ ...formErrors });
    if (Object.values(formErrors).every((message) => !message))
      setFormValid(true);
  };

  return (
    <>
      {!formValid ? (
        <>
          <Header title='Создание анкеты' />
          <form className='form-container'>
            {data.map((element, index) => {
              const { inputType, title, name, placeholder, rows, maxlength } =
                element;
              return !rows ? (
                <Input
                  key={index}
                  inputType={inputType}
                  title={title}
                  name={name}
                  placeholder={placeholder}
                  value={userInfo[name]}
                  handleChange={handleValues}
                  errorMsg={formErrors[name]}
                />
              ) : (
                <TextArea
                  key={index}
                  title={title}
                  name={name}
                  rows={rows}
                  placeholder={placeholder}
                  maxlength={maxlength}
                  value={userInfo[name]}
                  handleChange={handleValues}
                  errorMsg={formErrors[name]}
                />
              );
            })}
            <ButtonsContainer handleForm={handleForm} />
          </form>
        </>
      ) : (
        <Answers userInfo={userInfo} />
      )}
    </>
  );
};

export default FormContainer;
