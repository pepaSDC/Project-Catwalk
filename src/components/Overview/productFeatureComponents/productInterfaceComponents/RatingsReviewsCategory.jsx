import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import {StarRating} from '../../../RatingsAndReviews/StarRating.jsx';
import { RatingsAndReviewsContext } from '../../../../context/RatingsAndReviewsState.js'
import { axios } from 'axios'
// import { RatingsAndReviewsProvider } from '../../../../context/RatingsAndReviewsState.js';


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
  // const { totalRatings, averageRating, getMetaReviews } = useContext(RatingsAndReviewsContext);
  const {
    getProductInfo, productInfo, featuredStyleIndex
  } = useContext(OverviewContext);
  const [reviewRating, setReviewRating] = useState(0);

  useEffect(() => {
    getProductInfo(currentProductId)
  }, [currentProductId])

  const getReviewMeta = (id) => {
    return axios({
      method: 'GET',
      url: `http://localhost:3000/reviews/meta/?product_id=${id}`
    })
  }

  useEffect(() =>{
    getProductInfo(currentProductId)

    getReviewMeta(currentProductId)
    .then((results) => {
      let absolutetotal = 0;
      let totalratings = 0;
      for (var key in results.data.ratings) {
        totalratings += Number(results.data.ratings[key])
        absolutetotal += (Number(results.data.ratings[key]) * Number(key));
      }
      let average = Math.round((absolutetotal/totalratings) * 4) / 4;
       setReviewRating(average);
    })
  },[currentProductId])


    const productCategory = productInfo.data ? productInfo.data.category: ''

  return (
    <div
      style={ratingsReviewsCategoryStyle}
      className="ratingsReviewsCategory">
    <div
      className="ratingsReviewsCategory">
        <div>
          <StarRating rating={reviewRating}/>
        </div>
        <div
          className="ratingsReviewsContainer">
          <a href="#ratingsAndReviews">See All Reviews</a>
        </div>
      </div>
      <div>
        {productCategory}
      </div>
    </div>
  );
}