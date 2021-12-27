import React from 'react';
import {SortOptions} from './SortOptions.jsx';
import {Review} from './Review.jsx';
import {NewReview} from './NewReview.jsx';

export const ReviewList = (props) => {
  return (
    <div>
      <SortOptions/>
      <Review />
      <Review />
      <div>
        <button>More Reviews</button>
        <NewReview />
      </div>
    </div>
  );
}