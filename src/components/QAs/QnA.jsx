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
  const [state, setState] = useState({});

  const getState = () => {
    let dataState = {};
    axios.get(`/products/${currentProductId}`)
      .then(result => {
        dataState.product_name = result.data.name;
        return axios.get(`/qa/questions?product_id=${currentProductId}&page=1&count=300`);
      })
      .then(response => {
        // let index = 0;
        // let helpful = [];
        // for (let i = 0; i < response.data.results.length; i++) {
        //   let currentQ = response.data.results[i];
        //   if (currentQ.question_helpfulness === 0) {
        //     index = i - 1;
        //     break;
        //   } else {
        //     helpful.push(currentQ);
        //   };
        // };
        // let unsorted = response.data.results.slice(index);
        // let sorted = unsorted.sort( (a, b) => {
        //   return new Date(b.question_date) - new Date(a.question_date);
        // });
        // dataState.questions = [...helpful, ...sorted];
        dataState.questions = response.data.results;
        return;
      })
      .then(data => {
        setState(dataState);
      })
      .catch(err => console.log(err));
  };

  useEffect( () => {
    getState();
    return () => {
      setState({});
    };
  }, [currentProductId]);

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    let answer = {
      body: event.target.body.value,
      name: event.target.username.value,
      email: event.target.email.value,
      product_id: currentProductId
    };
    axios.post(`/qa/questions`, answer)
      .then(response => {
        console.log(response);
        // return axios.get(`/qa/questions/${event.target.id}/answers`);
      })
      // .then(newData => {
      //   console.log('NEW ANSWER:', newData.data.results);
      //   setView( (curState) => { return !curState; });
      //   setOrderedAns( (curState) => {
      //     return sellerFirst(newData.data.results);
      //   });
      //   setErrors( (curState) => ({body: true, name: true, email: true}));
      // })
      .catch(error => {
        console.log(error.message);
      });
    };

  return (
    <div style={container}>
      <div style={textStyle}>QUESTIONS & ANSWERS</div>
      <Search />
      {state.questions
        && <Questions questions={state.questions} product_name={state.product_name} task={handleQuestionSubmit}/>
      }
    </div>
  );
}