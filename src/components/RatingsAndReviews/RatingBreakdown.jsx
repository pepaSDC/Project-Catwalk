/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {StarRating} from './StarRating.jsx';
import {ProgressBar} from './ProgressBar.jsx';
export const RatingBreakdown = ({meta, averageRating, totalRatings, useSorting, sorting}) => {

  const [selected, useSelected] = useState([]);

  const clickHandler = (e) => {
    let value = Number(e.target.getAttribute('value'));
    let index = sorting.indexOf(value);
    if (index === -1) {
      useSorting([...sorting, value]);
    } else {
      useSorting(sorting.filter(item => item !== value))
    }
    // if () {
    //   useSelected(null);
    // } else {
    //   useSelected(e.target.getAttribute('value'));
    // }
  }

  const selectedStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold'
  }

  const unselectedStyle = {
    textDecoration: 'underline'
  }

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
            <a className='sortingButton' value={item} onClick={clickHandler}>{item} stars</a>
            <ProgressBar percent={rating/totalRatings * 100} />
          </div>
        );
      }) : null }
      {sorting.length > 0
        ? <div style={{borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', marginTop: '5px'}}>
            <div>Star Rating Filters Applied: {`${sorting}`} </div>
            <div onClick={()=>useSorting([])} style={{fontSize: '12px'}}>Remove All Filters</div>
          </div>
          : null
      }
    </div>
  )
}