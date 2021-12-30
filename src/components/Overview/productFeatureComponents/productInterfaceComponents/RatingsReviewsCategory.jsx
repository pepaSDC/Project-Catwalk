import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

import {StarRating} from '../../../RatingsAndReviews/StarRating.jsx';
import { RatingsAndReviewsContext } from '../../../../context/RatingsAndReviewsState.js'


let ratingsReviewsCategoryStyle = {
  display: 'flex',
  flexDirection: 'column'
}

let ratingsReviewsStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export const RatingsReviewsCategory = () => {
  const { currentProductId } = useContext(GlobalContext);
  const { averageRating } = useContext(RatingsAndReviewsContext);

  const {
    getProductInfo, productInfo, featuredStyleIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductInfo(id);
  }, [id])

    // console.log('line 27 in productInfoData: ', productInfo);

    const productCategory = productInfo.data ? productInfo.data.category: ''

  return (
    <div
      style={ratingsReviewsCategoryStyle}
      className="ratingsReviewsCategory">
    <div
      style={ratingsReviewsStyle}
      className="ratingsReviewsCategory">
        <div>
          <StarRating rating={averageRating}/>
        </div>
        <div>
          <a>See All Reviews</a>
        </div>
      </div>
      <div>
        {productCategory}
      </div>
    </div>
  );
}