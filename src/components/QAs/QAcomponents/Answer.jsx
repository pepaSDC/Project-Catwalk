/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import './answerStyles.css';

const Answer = (props) => {
  const [helpful, setHelpful] = useState( () => {
    return {
      clicked: false,
      amount: props.answer.helpfulness
    };
  });
  const [report, setReport] = useState( () => {
    return 'Report';
  });

  let date = new Date(props.answer.date);
  let dateFormat = {month: 'short', day: 'numeric', year: 'numeric'};
  date = date.toLocaleDateString('en-US', dateFormat);

  const handleHelpful = (event) => {
    if (!helpful.clicked) {
      axios.put(`/qa/answers/${event.target.id}/helpful`)
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

  const handleReport = (event) => {
    if (report !== 'Reported') {
      axios.put(`/qa/answers/${event.target.id}/report`)
        .then(response => {
          setReport('Reported');
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div className='answer'>
      <div>
        <div className='answerBody'>
          <div className='answerText'>
            {props.answer.body}
          </div>
          {props.answer.photos.length > 0
            && props.answer.photos.map( photo => {
              <img src={photo} />
            })
          }
          <div>
            <span className='user'>
              by {props.answer.answerer_name},
            </span>
            {props.answer.answerer_name === 'Seller'
              && <span className='user'> - <span className='userSeller'>Seller,</span></span>}
            <span className='userDate'> {date}</span>
            <span className='helpful'>
              Helpful? <span className='yes' id={props.answer.answer_id} onClick={handleHelpful}>Yes</span> ({helpful.amount})
            </span>
            <span className='report' id={props.answer.answer_id} onClick={handleReport}>
              {report}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;