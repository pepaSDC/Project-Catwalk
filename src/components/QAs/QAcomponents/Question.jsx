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

  const sellerFirst = (answers) => {
    let seller = [];
    let nonSeller = [];
    answers.forEach( ans => {
      if (ans.answerer_name === 'Seller') {
        seller.push(ans);
      } else {
        nonSeller.push(ans);
      }
    });
    return [...seller, ...nonSeller];
  };

  const [orderedAns, setOrderedAns] = useState( () => {
    return sellerFirst(props.answers);
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

  const handleAddAnswerView = (event) => {
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
        return axios.get(`/qa/questions/${event.target.id}/answers`);
      })
      .then(newData => {
        setView( (currState) => { return !currState; });
        setOrderedAns( (curState) => {
          return sellerFirst(newData.data.results);
        });
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
          <span className='addAnswer' onClick={handleAddAnswerView}>Add Answer</span>
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