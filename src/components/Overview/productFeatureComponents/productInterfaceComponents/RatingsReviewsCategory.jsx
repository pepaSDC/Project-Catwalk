import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'

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

  return (
    <div
      style={ratingsReviewsCategoryStyle}
      className="ratingsReviewsCategory">
      <div
        style={ratingsReviewsStyle}
        className="ratingsReviewsCategory">
        <div>
          Ratings
        </div>
        <div>
          Reviews
        </div>
      </div>
      <div>
        Category
      </div>
    </div>
  );
}