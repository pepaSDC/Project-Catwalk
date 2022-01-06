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
  const [sorting, useSorting] = useState([]);

  const filterReviews = (array, sorting) => {
    return array.filter(item => sorting.includes(item.rating));
  }
  let currentReviews = sorting.length > 0 ? filterReviews(allReviews, sorting) : allReviews;

  useEffect(() => {
    let isAPISubscribed = true;
    updateReviewsState(currentProductId, sortBy);
    return () => {
      isAPISubscribed = false;
    }
  }, [currentProductId, sortBy, newReview])


  return (
    <div id="RatingsAndReviews">
      <div className="reviewsModule" style={{margin: '30px'}}>
        <h4 style={{paddingLeft: '30px'}}>RATINGS AND REVIEWS</h4>
        <div style={styleReviews}>
          <div className="reviewsAside" style={styleAside}>
            <RatingBreakdown sorting={sorting} useSorting={useSorting} meta={meta} averageRating={averageRating} totalRatings={totalRatings}/>
            <ProductBreakdown characteristics={meta.characteristics}/>
          </div>
          <ReviewList state={currentReviews} meta={meta} useNewReview={useNewReview}/>
        </div>
      </div>
    </div>
  );
};

