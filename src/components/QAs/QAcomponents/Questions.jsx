/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState.js';
import axios from 'axios';

import Answers from './Answers.jsx';

const Questions = (props) => {
  return (
    <div>
      {props.questions.map( (question) => {
        return (
          <div key={question.question_id}>
            Q: {question.question_body}
            {props.answers[question.question_id]
                ? <Answers answers={props.answers[question.question_id]} />
                : 'does not exist'}
          </div>
        );
      })}
    </div>
  );
};

export default Questions;