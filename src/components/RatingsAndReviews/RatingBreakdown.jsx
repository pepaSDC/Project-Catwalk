import React from 'react';
import {StarRating} from './StarRating.jsx';

export const RatingBreakdown = ({meta, averageRating, totalRatings}) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <span>{averageRating}</span>
        <StarRating rating={averageRating}/>
      </div>
      {meta.recommended ? <p>{Math.round(Number(meta.recommended.true)/totalRatings * 100)}% of reviews recommend this product</p> : null}
      <p> 5 stars bar here</p>
      <p> 4 stars bar here</p>
      <p> 3 stars bar here</p>
      <p> 2 stars bar here</p>
      <p> 1 stars bar here</p>
    </div>
  )
}