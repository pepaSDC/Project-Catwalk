import React from 'react';
import Search from './QAcomponents/Search.jsx';

const container = {
  border: '1px solid green',
  position: 'relative'
};

const textStyle = {
  fontSize: '2vmin',
  paddingTop: '10px',
  paddingBottom: '10px'
}

const QA = () => {

  return (
    <div style={container}>
      <div style={textStyle}>QUESTIONS & ANSWERS</div>
      <Search />
    </div>
  );
};

export default QA;