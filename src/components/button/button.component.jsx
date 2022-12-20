import './button.styles.css';

const Button = ({ type, text, onClick }) => (
  <button
    className={`btn ${type === 'clear' ? 'btn-clear' : 'btn-submit'}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
