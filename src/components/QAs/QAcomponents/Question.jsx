/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import './questionStyles.css';
import Answers from './Answers.jsx';
import Modal from './Modal.jsx';
import UploadPhotos from './UploadPhotos.jsx';

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

  const [errors, setErrors] = useState( () => {
    return {
      body: true,
      name: true,
      email: true
    }
  });

  const sellerFirst = (answers) => {
    let seller = [];
    let nonSeller = [];
    answers.forEach(answer => {
      if (answer.answerer_name === 'Seller') {
        seller.push(answer);
      } else {
        nonSeller.push(answer);
      }
    });
    return [...seller, ...nonSeller];
  };

  const [orderedAns, setOrderedAns] = useState( () => {
    let answers = props.question.answers;
    let initSeller = [];
    let initNonSeller = [];
    for (var key in answers) {
      if (answers[key].answerer_name === 'Seller') {
        answers[key].answer_id = key;
        initSeller.push(answers[key]);
      } else {
        answers[key].answer_id = key;
        initNonSeller.push(answers[key]);
      };
    };
    initSeller = initSeller.sort( (a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    initNonSeller = initNonSeller.sort( (a, b) => {
      return b.helpfulness - a.helpfulness;
    });
    return [...initSeller, ...initNonSeller];
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
    setErrors( (curState) => ({body: true, name: true, email: true}));
    setPhotos([]);
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let answer = {
      body: event.target.body.value || undefined,
      name: event.target.name.value || undefined,
      email: event.target.email.value || undefined
    };
    for (var val in answer) {
      if (answer[val] === undefined) {
        error = true;
      };
    };
    if (error) {
      if (answer.email) {
        if (!answer.email.includes('@') || !answer.email.includes('.com')) {
          answer.email = 'wrong';
        };
      };
      setErrors(answer);
    } else {
      answer.photos = photos;
      axios.post(`/qa/questions/${event.target.id}/answers`, answer)
        .then(response => {
          return axios.get(`/qa/questions/${event.target.id}/answers`);
        })
        .then(newData => {
          console.log('NEW ANSWER:', newData.data.results);
          setView( (curState) => { return !curState; });
          setOrderedAns( (curState) => {
            return sellerFirst(newData.data.results);
          });
          setErrors( (curState) => ({body: true, name: true, email: true}));
        })
        .catch(error => {
          console.log(error.message);
        });
    };
  };

  const handleErrorReset = (event) => {
    let name = event.target.getAttribute('name');
    if (errors[name] === undefined) {
      setErrors( (curState) => {
        return {
          ...curState,
          [name]: true
        }
      });
    };
  };

  const [photos, setPhotos] = useState([]);

  const handleSelected = (event) => {
    if (photos.length < 5) {
      let len = Object.keys(event.target.files);
      if (len.length < 5) {
        if (((photos.length - 1) + len.length) < 5) {
          let files = event.target.files
          let promises = [];
          for (let i = 0; i < len.length; i++) {
            let file = files[len[i]];
            // let url = URL.createObjectURL(file);
            let promise = new Promise( (resolve, reject) => {
              let reader = new FileReader();
              reader.onload = () => {
                resolve(reader.result);
              };
              reader.onerror = () => {
                reject('error');
              };
              reader.readAsDataURL(file);
            });
            promises.push(promise);
          };
          Promise.all(promises)
            .then(data => {
              setPhotos([...photos, ...data]);
            })
            .catch(err => console.log(err));
        };
      };
    };
  };

  return (
    <div className='question'>
      <input className='qRadio' type='radio' name='accordion' id={props.question.question_id}></input>
      <label className='qBody' htmlFor={props.question.question_id}>
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
        <Answers answers={orderedAns} />
      </label>
      <Modal open={view} onClose={handleAddAnswerView} qBody={props.question.question_body} product_name={props.product_name}>
        <form className='form' id={props.question.question_id} onSubmit={handleAnswerSubmit}>
          <label>Your Answer <span className='asterisk'>*</span></label>
          <textarea name='body' maxLength='1000' rows='8' onFocus={handleErrorReset}></textarea>
          {!errors.body && <div className='error'>Please enter valid answer (max 1000 characters)</div>}
          <label>What is your nickname <span className='asterisk'>*</span></label>
          <input className='username' type='text' maxLength='60' name='name' placeholder='Example: jack543' onFocus={handleErrorReset}></input>
          {!errors.name && <div className='error'>Please enter valid name (max 60 characters)</div>}
          <label>Your Email <span className='asterisk'>*</span></label>
          <input className='email' type='text' maxLength='60' name='email' placeholder='Example: jack@email.com' onFocus={handleErrorReset}></input>
          {!errors.email ? <div className='error'>Please enter an email (max 60 characters)</div> : errors.email === 'wrong' && <div className='error'>Please enter a valid email</div>}
          <label>Upload your photos</label>
          <UploadPhotos previews={photos} task={handleSelected}/>
          <input className='submit' type='submit' value='Answer'></input>
        </form>
      </Modal>
    </div>
  );
};

export default Question;