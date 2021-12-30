import React, { useState } from 'react';
import {SortOptions} from './SortOptions.jsx';
import {Review} from './Review.jsx';
import {NewReview} from './NewReview.jsx';

export const ReviewList = (props) => {
  const [tiles, setTiles] = useState(2);
  const reviews = props.state ? props.state.slice(0,tiles) : [];

  const clickHandler = (event) => {
    console.log('clicked');
    setTiles(tiles + 2);

  }
  return (
    <div style={{width: '66%'}}>
      <SortOptions/>
      {reviews.map((review) => <Review key={review.review_id} review={review}/> )}
      <div>
        {props.state.length > reviews.length ? <button onClick={clickHandler}>More Reviews</button> : null}
        <NewReview />
      </div>
    </div>
  );
}