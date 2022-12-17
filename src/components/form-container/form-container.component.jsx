import React from 'react';
import data from '../../data/data.jsx';
import Header from '../header/header.component.jsx';
import Input from '../input/input.component.jsx';
import TextArea from '../textarea/textarea.component.jsx';
import ButtonsContainer from '../buttons-container/buttons-container.component.jsx';
import Answers from '../answers/answers.component.jsx';
import { validateForm } from '../../utils.js';
import './form-container.styles.css';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        firstName: '',
        lastName: '',
        birthday: '',
        phone: '',
        url: '',
        about: '',
        technologies: '',
        lastProject: '',
      },
      formErrors: {
        firstName: '',
        lastName: '',
        birthday: '',
        phone: '',
        url: '',
        about: '',
        technologies: '',
        lastProject: '',
      },
      formValid: false,
    };

    this.handleValues = this.handleValues.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleValues(e) {
    let value = e.target.value;
    let name = e.target.id;
    let userInfo = this.state.userInfo;
    userInfo[name] = value;
    this.setState({ userInfo });
  }

  handleForm(e) {
    e.preventDefault();
    let target = e.target;
    target.className.includes('btn-clear')
      ? this.handleClearForm()
      : this.handleSubmitForm();
  }

  handleClearForm() {
    const userInfo = {
      firstName: '',
      lastName: '',
      birthday: '',
      phone: '',
      url: '',
      about: '',
      technologies: '',
      lastProject: '',
    };
    const formErrors = {
      firstName: '',
      lastName: '',
      birthday: '',
      phone: '',
      url: '',
      about: '',
      technologies: '',
      lastProject: '',
    };
    this.setState({ userInfo, formErrors });
  }

  handleSubmitForm() {
    const { trimmedUserInfo, formErrors } = validateForm(this.state.userInfo);
    this.setState({ userInfo: trimmedUserInfo, formErrors: formErrors }, () => {
      if (Object.values(this.state.formErrors).every((message) => !message))
        this.setState({ formValid: true });
    });
  }

  render() {
    return (
      <>
        {!this.state.formValid ? (
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
                    value={this.state.userInfo[name]}
                    handleChange={this.handleValues}
                    errorMsg={this.state.formErrors[name]}
                  />
                ) : (
                  <TextArea
                    key={index}
                    title={title}
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    maxlength={maxlength}
                    value={this.state.userInfo[name]}
                    handleChange={this.handleValues}
                    errorMsg={this.state.formErrors[name]}
                  />
                );
              })}
              <ButtonsContainer handleForm={this.handleForm} />
            </form>
          </>
        ) : (
          <Answers userInfo={this.state.userInfo} />
        )}
      </>
    );
  }
}

export default FormContainer;
