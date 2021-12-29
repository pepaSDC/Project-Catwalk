/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  fontSize: '13px',
  color: 'gray'
};

const Answers = (props) => {
  const [count, setCount] = useState(2);
  const [answers, setAnswers] = useState( () => {
    return props.answers.slice(0, count);
  });
  return (
    <div>
      {answers.map( ans => {
        return <div key={ans.answer_id}>A: <span style={styles}>{ans.body}</span>
        </div>;
      })}
    </div>
  );
}

export default Answers;