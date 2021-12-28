import React from 'react';
import {SortOptions} from './SortOptions.jsx';
import {Review} from './Review.jsx';
import {NewReview} from './NewReview.jsx';

export const ReviewList = (props) => {
  const reviews = props.state ? props.state.slice(0,10) : [];
  return (
    <div>
      <SortOptions/>
      {reviews.map((review) => <Review key={review.review_id} review={review}/> )}
      <div>
        <button>More Reviews</button>
        <NewReview />
      </div>
    </div>
  );
}