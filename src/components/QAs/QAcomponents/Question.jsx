/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import './questionStyles.css';
import Answers from './Answers.jsx';

const Question = (props) => {
  const [helpful, setHelpful] = useState( () => {
    return {
      clicked: false,
      amount: props.question.question_helpfulness
    };
  });

  const [view, setView] = useState( () => {
    return false;
  });

  const [orderedAns, setOrderedAns] = useState( () => {
    let seller = [];
    let nonSeller = [];
    props.answers.forEach( ans => {
      if (ans.answerer_name === 'Seller') {
        seller.push(ans);
      } else {
        nonSeller.push(ans);
      }
    });
    return [...seller, ...nonSeller];
  });

  console.log('ORDERED ANS', orderedAns);

  const handleHelpful = (event) => {
    if (!helpful.clicked) {
      axios.put(`/qa/questions/${event.target.id}/helpful`)
        .then(response => {
          setHelpful( (currState) => {
            return {
              clicked: true,
              amount: currState.amount + 1
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleAddAnswer = (event) => {
    event.preventDefault();
    setView( (currState) => { return !currState; });
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    let answer = {
      body: event.target.body.value,
      name: event.target.username.value,
      email: event.target.email.value
    };
    axios.post(`/qa/questions/${event.target.id}/answers`, answer)
      .then(response => {
        setView( (currState) => { return !currState; });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className='question'>
      <div className='qContainer'>
        <span>Q:</span>
        <div className='questionBody'>
          {props.question.question_body}
        </div>
        <div className='helpContainer'>
          <span className='helpful'>
            Helpful? <span className='yes' id={props.question.question_id} onClick={handleHelpful}>Yes</span> ({helpful.amount})
          </span>
          <span className='addAnswer' onClick={handleAddAnswer}>Add Answer</span>
        </div>
      </div>
      {view
        ? <div className='answerForm'>
            <form className='form' id={props.question.question_id} onSubmit={handleAnswerSubmit}>
              <label>Username</label>
              <input type='text' name='username'></input>
              <label>Email</label>
              <input type='email' name='email'></input>
              <label>Answer</label>
              <textarea name='body' rows='4' cols='10'></textarea>
              <input type='submit' value='Answer'></input>
            </form>
          </div>
        : <div></div>
      }
      <Answers answers={orderedAns} />
    </div>
  );
};

export default Question;