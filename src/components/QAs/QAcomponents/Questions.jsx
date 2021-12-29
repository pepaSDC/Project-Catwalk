/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Answers from './Answers.jsx';

const styles = {
  fontWeight: '900'
};

const Questions = (props) => {
  const [count, setCount] = useState(2);
  const [questions, setQuestions] = useState([]);
  useEffect( () => {
    setQuestions( () => {
      return props.questions.slice(0, count);
    })
  }, [count]);
  return (
    <div style={styles}>
      {questions.map( (question) => {
        return (
          <div key={question.question_id}>
            Q: {question.question_body}
            {props.answers[question.question_id]
                ? <Answers answers={props.answers[question.question_id]} />
                : 'does not exist'}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;