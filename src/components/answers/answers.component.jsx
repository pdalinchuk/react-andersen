import data from '../../data/data';
import './answers.styles.css';

const Answers = ({ userInfo }) => {
  const { firstName, lastName } = userInfo;
  return (
    <div className='wrapper'>
      <h1 className='header'>
        {firstName} {lastName}
      </h1>
      {data.map((element, index) => {
        const { title, name } = element;
        return (
          <div key={index} className='content'>
            <div className='content-title'>{title}</div>
            <div className='content-value'>{userInfo[name]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
