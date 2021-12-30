/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import './questionStyles.css';

const Question = (props) => {
  const [helpful, setHelpful] = useState( () => {
    return {
      clicked: false,
      amount: props.question.question_helpfulness
    };
  });

  const [view, setView] = useState ( () => {
    return false;
  });

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

  return (
    <div className='question'>
      <div className='container'>
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
            <form className='form'>
              <label>Username</label>
              <input type='text'></input>
              <labael>Answer</labael>
              <textarea rows='4' cols='10'></textarea>
              <div><input type='submit' value='Answer'></input></div>
            </form>
          </div>
        : <div></div>
      }
    </div>
  );
};

export default Question;