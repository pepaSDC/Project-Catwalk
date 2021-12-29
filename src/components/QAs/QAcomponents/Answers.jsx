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
  return (
    <div>
      {answers.map( ans => {
        return <Answer key={ans.answer_id} answer={ans}/>;
      })}
    </div>
  );
}

export default Answers;