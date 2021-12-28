import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
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
  const [reviews, setReviews] = useState([]);
  const {currentProductId} = useContext(GlobalContext);
  console.log('this is the current product id in reviews', currentProductId);

  useEffect(() => {
    axios.get(`http://localhost:3000/reviews/?product_id=${currentProductId}&sort=newest`)
      .then((results) => {
        setReviews(results.data)
      })
      .catch((err) => {
        console.log(err)
      });
  }, [currentProductId])

  //update state before render


  return (
    <div style={{margin: '0 30px'}}>
      RATINGS AND REVIEWS
      <div className="reviewsModule" style={styleReviews}>
        <div className="reviewsAside" style={styleAside}>
          <RatingBreakdown/>
          <ProductBreakdown/>
        </div>
        <ReviewList state={reviews.results}/>
      </div>

    </div>
  );
};

