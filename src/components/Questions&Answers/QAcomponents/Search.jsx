import React from 'react';

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '99.1%'
};

const iconStyle = {
  position: 'absolute',
  right: '1%'
};

const inputStyles = {
  minWidth: '100%',
  minHeight: '6vh'
};

const Search = () => {
  return (
    <form style={formStyle}>
      <input style={inputStyles} type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." name="answer"></input>
      <i style={iconStyle} className="fas fa-search"></i>
    </form>
  );
}

export default Search;