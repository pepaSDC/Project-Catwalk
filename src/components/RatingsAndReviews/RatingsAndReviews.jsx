import React from 'react';
import {ReviewList} from './ReviewList.jsx';
import {RatingBreakdown} from './RatingBreakdown.jsx';
import {ProductBreakdown} from './ProductBreakdown.jsx';

export const RatingsAndReviews = (props) => {
  let styleReviews = {
    width: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 20px'
  }
  let styleAside = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column'
  }




  return (
    <div style={{margin: '0 30px'}}>
      RATINGS AND REVIEWS
      <div className="reviewsModule" style={styleReviews}>
        <div className="reviewsAside" style={styleAside}>
          <RatingBreakdown/>
          <ProductBreakdown/>
        </div>
        <ReviewList />
      </div>

    </div>
  );
};

