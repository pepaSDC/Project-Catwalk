/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Question from './Question.jsx';
import Answers from './Answers.jsx';
import QuestionModal from './QuestionModal.jsx';

const Questions = (props) => {
  const [count, setCount] = useState(4);
  const [questions, setQuestions] = useState([]);
  useEffect( () => {
    setQuestions( () => {
      return props.questions.slice(0, count);
    })
  }, [count, props.questions.length]);

  const handleShowMore = (event) => {
    setCount( (curCount) => {
      return curCount + 2;
    });
  };

  return (
    <div>
      <div className='wholeQuestion'>
        <QuestionModal open={props.view} onClose={props.handleView} product_name={props.product_name}>
          <form className='form' onSubmit={props.task} autoComplete='off'>
            <label>Your Question <span className='asterisk'>*</span></label>
            <textarea name='body' maxLength='1000' rows='8' placeholder='Why did you like the product or not?' onFocus={props.handleError}></textarea>
            {!props.errors.body && <div className='error'>Please enter valid answer (max 1000 characters)</div>}
            <label>What is your nickname <span className='asterisk'>*</span></label>
            <input className='username' type='text' maxLength='60' name='name' placeholder='Example: jackson11!' onFocus={props.handleError} onBlur={props.handleBlur}></input>
            {props.focus.name && <div className='privacy'>For privacy reasons, do not use your full name or email address</div>}
            {!props.errors.name && <div className='error'>Please enter valid name (max 60 characters)</div>}
            <label>Your Email <span className='asterisk'>*</span></label>
            <input className='email' type='text' maxLength='60' name='email' placeholder='Example: jack@email.com' onFocus={props.handleError} onBlur={props.handleBlur}></input>
            {props.focus.email && <div className='privacy'>For authentication reasons, you will not be emailed</div>}
            {!props.errors.email ? <div className='error'>Please enter an email (max 60 characters)</div> : props.errors.email === 'wrong' && <div className='error'>Please enter a valid email</div>}
            <input className='questionSubmit' type='submit' value='Answer'></input>
          </form>
        </QuestionModal>
        {questions.map( (question) => {
          return (
            <div key={question.question_id} className='oneQ'>
                <Question question={question} product_name={props.product_name}/>
            </div>
          );
        })}
      </div>
      {!props.found && <div>No questions found</div>}
      <div className='topBar'>
        {props.questions.length > count
          && <button onClick={handleShowMore} className='qShowMore'>
            Show More Questions
          </button>
        }
        <button className='addQuestion' onClick={props.handleView}>Add Question +</button>
      </div>
    </div>
  );
};

export default Questions;