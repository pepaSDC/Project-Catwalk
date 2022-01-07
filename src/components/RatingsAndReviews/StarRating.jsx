/* eslint-disable react/prop-types */
import React from 'react';

export const StarRating = (props) => {
  const rating = Math.round(props.rating * 4) / 4;
  const starRating = {
    unicodeBidi: 'bidi-override',
    color: '#F5F5F5',
    position: 'relative',
    margin: '0',
    padding: '0'
  }
  const fillRating = {
    color: '#77ff2e',
    padding: '0',
    position: 'absolute',
    display: 'block',
    zIndex: '1',
    top: '0',
    left: '0',
    overflow: 'hidden',
    width: `${rating/5 * 100}%`
  }

  const span = {
    display: 'inline-block',

  }

  const emptyRating = {
    padding: '0',
    display: 'block',
    zIndex: '0'
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <div className="star-ratings" style={starRating}>
        <div className="fill-ratings" style={fillRating}>
          <span style={span}>★★★★★</span>
        </div>
        <div className="empty-ratings" style={emptyRating}>
          <span style={span}>★★★★★</span>
        </div>
      </div>
    </div>
  );
}

export default StarRating;