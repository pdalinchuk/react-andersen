import ErrorMessage from '../error-message/error-message.component';
import './input.styles.css';

const Input = (props) => {
  const { name, title, placeholder, inputType, value, handleChange, errorMsg } =
    props;
  return (
    <div className='form-group'>
      <label className='form-label' htmlFor={name}>
        {title}
      </label>
      <input
        className='form-input'
        id={name}
        placeholder={placeholder}
        type={inputType}
        value={value}
        onChange={handleChange}
      />
      {errorMsg && <ErrorMessage text={errorMsg} />}
    </div>
  );
};

export default Input;
