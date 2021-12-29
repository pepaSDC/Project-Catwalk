import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState.js';
import axios from 'axios';

import Answers from './Answers.jsx';

const Questions = () => {
  const { currentProductId } = useContext(GlobalContext);
  const [questions, setQuestions] = useState([]);

  useEffect( () => {
    axios.get(`/qa/questions?product_id=${currentProductId}`)
      .then(response => {
        setQuestions(response.data.results);
      })
      .catch(err => console.log(err));
  }, [currentProductId]);

  return (
    <div>
      {questions.map( (question) => {
        return (
          <div key={question.question_id}>
            Q: {question.question_body}
            <Answers question_id={question.question_id}/>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;