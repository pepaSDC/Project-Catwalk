/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';

const Answers = (props) => {
  const [count, setCount] = useState(2);
  const [answers, setAnswers] = useState([]);
  useEffect( () => {
    setAnswers( () => {
      return props.answers.slice(0, count);
    })
  }, [count]);

  const handleLoadMore = (event) => {
    setCount( (curCount) => {
      return curCount + 2;
    });
  };

  return (
    <div className='individualAns'>
      <span>A:</span>
      <div>
        {answers.map( ans => {
          return <Answer key={ans.answer_id} answer={ans}/>;
        })}
        {props.answers.length > answers.length
          && <div className='loadMore' onClick={handleLoadMore}>LOAD MORE ANSWERS</div>
        }
      </div>
    </div>
  );
}

export default Answers;