import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import axios from 'axios';
import Search from './QAcomponents/Search.jsx';
import Questions from './QAcomponents/Questions.jsx';

const container = {
  position: 'relative'
};

const textStyle = {
  fontSize: '2vmin',
  paddingTop: '10px',
  paddingBottom: '10px'
};

export const QA = () => {
  const { currentProductId } = useContext(GlobalContext);
  const [state, setState] = useState({});
  const [modalView , setModalView] = useState(false);
  const [filtered, setFiltered] = useState( () => {
    return {
      questions: [],
      searching: false,
      found: true
    };
  });

  const [errors, setErrors] = useState( () => {
    return {
      body: true,
      name: true,
      email: true
    }
  });

  const [focus, setFocus] = useState( () => {
    return {
      name: false,
      email: false
    };
  });

  const sortQuestions = (response) => {
    let index = 0;
    let helpful = [];
    for (let i = 0; i < response.data.results.length; i++) {
      let currentQ = response.data.results[i];
      if (currentQ.question_helpfulness === 0) {
        index = i - 1;
        break;
      } else {
        helpful.push(currentQ);
      };
    };
    let unsorted = response.data.results.slice(index);
    let sorted = unsorted.sort( (a, b) => {
      return new Date(b.question_date) - new Date(a.question_date);
    });
    return [...helpful, ...sorted];
  };

  const getState = () => {
    let dataState = {};
    axios.get(`/products/${currentProductId}`)
      .then(result => {
        dataState.product_name = result.data.name;
        return axios.get(`/qa/questions?product_id=${currentProductId}&page=1&count=300`);
      })
      .then(response => {
        // let sorted = sortQuestions(response);
        dataState.questions = response.data.results;
        return;
      })
      .then(data => {
        setState(dataState);
      })
      .catch(err => console.log(err.message));
  };

  useEffect( () => {
    getState();
    return () => {
      setState({});
    };
  }, [currentProductId]);

  const handleAddQuestionView = (event) => {
    event.preventDefault();
    setModalView( (currState) => { return !currState; });
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let question = {
      body: event.target.body.value || undefined,
      name: event.target.name.value || undefined,
      email: event.target.email.value || undefined
    };
    for (var val in question) {
      if (question[val] === undefined) {
        error = true;
      };
    };
    if (error) {
      if (question.email) {
        if (!question.email.includes('@') || !question.email.includes('.com')) {
          question.email = 'wrong';
        };
      };
      setErrors(question);
    } else {
      let dataState = {};
      axios.post(`/qa/questions`, question)
        .then(response => {
          dataState.product_name = state.product_name;
          return axios.get(`/qa/questions?product_id=${currentProductId}&page=1&count=300`);
        })
        .then(newData => {
          dataState.questions = newData.data.results;
          setState(dataState);
          setErrors( (curState) => ({body: true, name: true, email: true}));
          setModalView(false);
        })
        .catch(error => {
          console.log(error.message);
        });
    };
  };

  const handleSearch = (event) => {
    if (event.target.value.length > 2) {
      if (!filtered.searching) {
        setFiltered( curState => {
          return {
            questions: [],
            searching: true,
            found: true
          };
        });
      };
      let filt = state.questions.filter(q => {
        let body = q.question_body.toLowerCase();
        let target = event.target.value.toLowerCase();
        return body.includes(target);
      });
      if (filt.length > 0) {
        setFiltered( curState => {
          return {
            questions: filt,
            searching: true,
            found: true
          };
        });
      } else if (filt.length === 0 && filtered.questions.length > 0) {
        setFiltered( curState => {
          return {
            questions: [],
            searching: true,
            found: false
          };
        });
      }
    } else if (event.target.value.length <= 2 && filtered.questions.length > 0) {
      setFiltered( curState => {
        return {
          questions: [],
          searching: false,
          found: true
        };
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
    if (name !== 'body') {
      handleFocus(name);
    };
  };

  const handleFocus = (name) => {
    if (!focus[name]) {
      setFocus( () => {
        return {
          ...focus,
          [name]: true
        };
      });
    };
  };

  const handleBlur = (event) => {
    let name = event.target.getAttribute('name');
    if (focus[name]) {
      setFocus( () => {
        return {
          ...focus,
          [name]: false
        };
      });
    };
  };

  return (
    <div style={container} id='QAs'>
      <div style={textStyle}>QUESTIONS & ANSWERS</div>
      <Search task={handleSearch}/>
      {state.questions
        && <Questions found={filtered.found} questions={filtered.searching ? filtered.questions : state.questions} product_name={state.product_name} task={handleQuestionSubmit} errors={errors} view={modalView} handleView={handleAddQuestionView} handleError={handleErrorReset} handleBlur={handleBlur}focus={focus}/>
      }
    </div>
  );
}