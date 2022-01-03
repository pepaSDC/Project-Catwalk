import React from 'react';
import {StarRating} from './StarRating.jsx';
import {ProgressBar} from './ProgressBar.jsx';
export const RatingBreakdown = ({meta, averageRating, totalRatings}) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <span style={{fontSize: '58px'}}>{Math.round(averageRating*10)/10}</span>
        <StarRating rating={averageRating}/>
      </div>
      {meta.recommended ? <p>{Math.round(Number(meta.recommended.true)/totalRatings * 100)}% of reviews recommend this product</p> : null}

      {meta.ratings ? ['5', '4', '3', '2', '1'].map(item => {
        let rating = meta.ratings[item] || 0;
        return (
          <div key={item} style={{display: 'flex', justifyContent:"space-between", padding: '5px 0'}}>
            <a>{item} stars</a>
            <ProgressBar percent={rating/totalRatings * 100} />
          </div>
        );
      }) : null }
    </div>
  )
}