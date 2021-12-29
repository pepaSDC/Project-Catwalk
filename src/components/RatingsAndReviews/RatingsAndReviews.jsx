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
    justifyContent: 'space-between',
    margin: '0 20px'
  }
  let styleAside = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column'
  }

  //establish local state
  const {currentProductId} = useContext(GlobalContext);
  const {allReviews, getAllReviews, getMetaReviews} = useContext(RatingsAndReviewsContext);

  useEffect(() => {
    getAllReviews(currentProductId);
    getMetaReviews(currentProductId);
  }, [currentProductId])

  return (
    <div style={{margin: '0 30px'}}>
      RATINGS AND REVIEWS
      <div className="reviewsModule" style={styleReviews}>
        <div className="reviewsAside" style={styleAside}>
          <RatingBreakdown/>
          <ProductBreakdown/>
        </div>
        <ReviewList state={allReviews}/>
      </div>

    </div>
  );
};

