import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import { RatingsAndReviewsContext } from '../../context/RatingsAndReviewsState.js';
import {ReviewList} from './ReviewList.jsx';
import {RatingBreakdown} from './RatingBreakdown.jsx';
import {ProductBreakdown} from './ProductBreakdown.jsx';

import axios from 'axios';

export const RatingsAndReviews = (props) => {
  let styleReviews = {
    width: 'auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '0 20px'
  }
  let styleAside = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column'
  }

  //establish local state
  const {currentProductId} = useContext(GlobalContext);
  const {updateReviewsState, meta, allReviews, averageRating, totalRatings, sortBy} = useContext(RatingsAndReviewsContext);
  const [newReview, useNewReview] = useState(null);

  useEffect(() => {
    let isAPISubsribed = true;
    updateReviewsState(currentProductId, sortBy);
    return () => {
      isAPISubsribed = false;
    }
  }, [currentProductId, sortBy, newReview])


  return ( allReviews.length !== 0 ?
    <div className="reviewsModule" style={{margin: '30px'}}>
      <h4 style={{paddingLeft: '30px'}}>RATINGS AND REVIEWS</h4>
      <div style={styleReviews}>
        <div className="reviewsAside" style={styleAside}>
          <RatingBreakdown meta={meta} averageRating={averageRating} totalRatings={totalRatings}/>
          <ProductBreakdown characteristics={meta.characteristics}/>
        </div>
        <ReviewList state={allReviews} meta={meta} useNewReview={useNewReview}/>
      </div>

    </div>
    : null
  );
};

