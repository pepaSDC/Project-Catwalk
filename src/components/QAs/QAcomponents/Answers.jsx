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
      <span>A:</span>
      {view === 'all'
      ? <div>
          {props.answers.map( ans => {
            return <Answer key={ans.answer_id} answer={ans}/>;
          })}
          <div className='loadMore' onClick={handleLoadMore}>Collapse Answers</div>
        </div>
      : <div>
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