import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState.js';
import axios from 'axios';

import Answers from './Answers.jsx';

const Questions = () => {
  const { currentProductId } = useContext(GlobalContext);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect( () => {
    axios.get(`/qa/questions?product_id=${currentProductId}`)
      .then(response => {
        setQuestions(response.data.results);
        return response.data.results;
      })
      .then(data => {
        let promises = data.map(q => {
          return new Promise ( (resolve, reject) => {
            axios.get(`/qa/questions/${q.question_id}/answers`)
              .then(response => {
                let answer = {
                  questionId: q.question_id,
                  answers: response.data.results
                }
                resolve(answer);
              })
              .catch(err => {
                reject(err);
              });
          });
        });
        return Promise.all(promises);
      })
      .then(ans => {
        let answerState = {};
        ans.forEach( a => {
          answerState[a.questionId] = a.answers
        });
        setAnswers(answerState);
      })
      .catch(err => console.log(err));
  }, [currentProductId]);

  return (
    <div>
      {questions.map( (question) => {
        return (
          <div key={question.question_id}>
            Q: {question.question_body}
            <Answers answer={answers[question.question_id]}/>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;