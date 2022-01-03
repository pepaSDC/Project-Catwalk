import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import axios from 'axios';
import Search from './QAcomponents/Search.jsx';
import Questions from './QAcomponents/Questions.jsx';

const container = {
  padding: '5px',
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

  const getQAs = () => {
    axios.get(`/qa/questions?product_id=${currentProductId}`)
      .then(response => {
        setQuestions(response.data.results);
      })
      .catch(err => console.log(err));
  };

  useEffect( () => {
    getQAs();
    return () => {
      setQuestions([]);
    };
  }, [currentProductId]);

  return (
    <div style={container}>
      <div style={textStyle}>QUESTIONS & ANSWERS</div>
      <Search />
      {questions.length > 0
        && <Questions questions={questions}/>
      }
    </div>
  );
}