import ErrorMessage from '../error-message/error-message.component';
import './textarea.styles.css';

const TextArea = (props) => {
  const {
    name,
    title,
    maxlength,
    value,
    rows,
    placeholder,
    handleChange,
    errorMsg,
  } = props;

  const defineMessage = (maxlength, value) => {
    const residual = maxlength - value.trim().length;
    return residual < 0
      ? 'Превышен лимит символов в поле!'
      : `Осталось ${residual}/${maxlength} символов`;
  };

  return (
    <div className='form-group'>
      <label className='form-label' htmlFor={name}>
        {title}
      </label>
      <textarea
        className='form-textarea'
        id={name}
        rows={rows}
        length={maxlength}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div className='counter'>{defineMessage(maxlength, value)}</div>
      {errorMsg && <ErrorMessage text={errorMsg} />}
    </div>
  );
};

export default TextArea;
