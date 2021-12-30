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
    left: `${props.breakdown.value/5 * 100}%`,
    color: 'gray'
  }

  let min, max;
  switch(props.type) {
    case 'Fit':
      min = 'Tight Fit';
      max = 'Loose Fit';
      break;
    case 'Comfort':
      min = 'Soft';
      max = 'Rough';
      break;
    case 'Quality':
      min = 'Low';
      max = 'High';
      break;
    case 'Size':
      min = 'Runs Small';
      max = 'Runs Large';
      break;
    case 'Length':
      min = 'Short';
      max = 'Long';
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