import React from 'react';
import data from '../../data/data';
import './answers.styles.css';

class Answers extends React.Component {
  render() {
    const { firstName, lastName } = this.props.userInfo;
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
              <div className='content-value'>{this.props.userInfo[name]}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Answers;
