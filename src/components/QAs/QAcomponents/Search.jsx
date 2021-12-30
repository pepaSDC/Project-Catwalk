import React from 'react';

const formStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContents: 'center',
  paddingBottom: '5px'
};

const iconStyle = {
  position: 'absolute',
  right: '1%'
};

const inputStyles = {
  minWidth: '100%',
  minHeight: '30px'
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