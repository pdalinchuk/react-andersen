import Button from '../button/button.component.jsx';
import './buttons-container.styles.css';

const ButtonsContainer = ({ handleForm }) => (
  <div className='btn-container'>
    <Button text='Сохранить' type='submit' onClick={handleForm} />
    <Button text='Отмена' type='clear' onClick={handleForm} />
  </div>
);

export default ButtonsContainer;
