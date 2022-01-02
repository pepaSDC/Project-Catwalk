/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Question from './Question.jsx';
import Answers from './Answers.jsx';

const styles = {
  fontWeight: '900'
};

const Questions = (props) => {
  const [count, setCount] = useState(4);
  const [questions, setQuestions] = useState([]);
  useEffect( () => {
    setQuestions( () => {
      return props.questions.slice(0, count);
    })
  }, [count]);
  return (
    <div style={styles}>
      {props.questions.length > 0 && questions.map( (question) => {
        return (
          <div key={question.question_id} className='oneQ'>
              <Question question={question}/>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;