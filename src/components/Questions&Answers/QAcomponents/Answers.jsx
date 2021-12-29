/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  fontSize: '13px',
  color: 'gray'
};

const Answers = (props) => {
  const [answers, setAnswers] = useState([]);

  useEffect( () => {
    axios.get(`/qa/questions/${props.question_id}/answers`)
      .then(response => {
        setAnswers(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(answers);

  return (
    <div>
      {answers.map(answer => {
        return <div key={answer.answer_id}>{answer.answer_body}</div>
      })}
    </div>
    // <div>A: {answers.map(answer => {
    //   return <span style={styles} key={answer.answer_id}>{answer.answer_body}</span>
    // })}</div>
  );
}

export default Answers;