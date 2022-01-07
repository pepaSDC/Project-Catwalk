/* eslint-disable react/prop-types */
import React from 'react';

export const ProgressBar = ({percent}) => {

  const parentStyle = {
    width: '200px',
    position: 'relative',
    top: '8px'
  }

  const barStyle = {
    width: `${percent}%`,
    height: '6px',
    backgroundColor: 'gray',
    position: 'absolute',
    display: 'block'
  }

  const greyStyle = {
    backgroundColor: 'Gainsboro',
    height: '6px',
  }

  return (
    <div style={parentStyle}>
      <div style={barStyle}></div>
      <div style={greyStyle}></div>
    </div>
  )
}
