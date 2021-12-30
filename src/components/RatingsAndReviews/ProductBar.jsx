import React from 'react';

export const ProductBar = (props) => {
  const bars = {
    height: '6px',
    width: '32%',
    margin: '5px 0',
    backgroundColor: 'Gainsboro',
  }

  const marker = {
    position: 'absolute',
    left: '50%',
    color: 'gray'
  }
  let min, max;
  switch(props.type) {
    case 'Size':
      min = 'Too Small';
      max = 'Too Large';
      break;
    default:
      min = 'Too Small';
      max = 'Too Large';

  }


  return (
    <div style={{width: 'auto', padding: '5px 0'}}>
      <span>{props.type}</span>
      <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
        <div style={bars}></div>
        <div style={bars}></div>
        <div style={bars}></div>
        <div style={marker}>&#9660;</div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}