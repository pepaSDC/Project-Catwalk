import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import axios from 'axios';
import Search from './QAcomponents/Search.jsx';
import Questions from './QAcomponents/Questions.jsx';

const container = {
  border: '1px solid green',
  position: 'relative'
};

const textStyle = {
  fontSize: '2vmin',
  paddingTop: '10px',
  paddingBottom: '10px'
}

export const QA = () => {
  const { currentProductId } = useContext(GlobalContext);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const getQAs = () => {
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
  };

  useEffect( () => {
    getQAs();
    return () => {
      setQuestions([]);
      setAnswers({});
    };
  }, [currentProductId]);

  return (
    <div style={container}>
      <div style={textStyle}>QUESTIONS & ANSWERS</div>
      <Search />
      {questions.length > 0
        ? <Questions questions={questions} answers={answers}/>
        : <div>No Questions Yet</div>
      }
    </div>
  );
}