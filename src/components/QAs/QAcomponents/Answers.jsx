/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';

const Answers = (props) => {
  const [view, setView] = useState('collapsed');
  const defaultAns = props.answers.slice(0, 2);

  const handleLoadMore = (event) => {
    setView( (curView) => {
      if (curView === 'collapsed') {
        return 'all'
      } else {
        return 'collapsed'
      };
    });
  };

  return (
    <div className='individualAns'>
      {props.answers.length > 0 ? <span className='aChar'>A:</span> : <span className='noAnswers'>There are no answers</span>}
      {view === 'all'
      ? <div className='whole-answer'>
          {props.answers.map( ans => {
            return <Answer key={ans.answer_id} answer={ans}/>;
          })}
          <div className='loadMore' onClick={handleLoadMore}>Collapse Answers</div>
        </div>
      : <div className='whole-answer'>
          {defaultAns.map( ans => {
            return <Answer key={ans.answer_id} answer={ans}/>;
          })}
          {props.answers.length > defaultAns.length
            && <div className='loadMore' onClick={handleLoadMore}>See More Answers</div>
          }
        </div>
      }
    </div>
  );
}

export default Answers;