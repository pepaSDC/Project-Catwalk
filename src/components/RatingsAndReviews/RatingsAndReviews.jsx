import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
import { RatingsAndReviewsContext } from '../../context/RatingsAndReviewsState.js'
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
  const {updateReviewsState, meta, allReviews, averageRating, totalRatings} = useContext(RatingsAndReviewsContext);

  useEffect(() => {
    let isAPISubsribed = true;
    updateReviewsState(currentProductId);

    return () => {
      isAPISubsribed = false;
    }
  }, [currentProductId])

  return ( allReviews.length !== 0 ?
    <div style={{margin: '0 30px'}}>
      RATINGS AND REVIEWS
      <div className="reviewsModule" style={styleReviews}>
        <div className="reviewsAside" style={styleAside}>
          <RatingBreakdown meta={meta} averageRating={averageRating} totalRatings={totalRatings}/>
          <ProductBreakdown characteristics={meta.characteristics}/>
        </div>
        <ReviewList state={allReviews}/>
      </div>

    </div>
    : null
  );
};

