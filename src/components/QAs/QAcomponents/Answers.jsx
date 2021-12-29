/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  fontSize: '13px',
  color: 'gray'
};

const Answers = (props) => {
  const [count, setCount] = useState(2);
  return (
    <div>
      {JSON.stringify(props.answer)}
    </div>
    // <div>A: {answers.map(answer => {
    //   return <span style={styles} key={answer.answer_id}>{answer.answer_body}</span>
    // })}</div>
  );
}

export default Answers;