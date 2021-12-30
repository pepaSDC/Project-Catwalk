import React, { createContext, useReducer } from 'react';
import AppReducer from './RRAppReducer.js';
const axios = require('axios');

//Initial state
const initialState = {
  allReviews: [],
  meta: [],
  averageRating: 0,
  totalRatings: 0
}

//create context
export const RatingsAndReviewsContext = createContext(initialState);

//provider component
// eslint-disable-next-line react/prop-types
export const RatingsAndReviewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  //functions

  function getAllReviews(id) {
    axios.get(`http://localhost:3000/reviews/?product_id=${id}&sort=newest`)
      .then((results) => {
        dispatch({
          type: 'GET_ALL_REVIEWS',
          payload: results.data.results
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  function getMetaReviews(id) {
    axios.get(`http://localhost:3000/reviews/meta/?product_id=${id}`)
      .then((results) => {

        dispatch({
          type: 'GET_METADATA',
          payload: results.data
        })

        let absolutetotal = 0;
        let totalratings = 0;
        for (var key in results.data.ratings) {
          totalratings += Number(results.data.ratings[key])
          absolutetotal += (Number(results.data.ratings[key]) * Number(key));
        }
        let average = Math.round((absolutetotal/totalratings) * 4) / 4;

        dispatch({
          type: 'UPDATE_AVERAGE_TOTAL_RATING',
          average: average,
          total: totalratings
        })

        return average;
      })
      .catch(err => {
        console.log(err)
      });
  }

  return(<RatingsAndReviewsContext.Provider value={{
    allReviews: state.allReviews,
    meta: state.meta,
    averageRating: state.averageRating,
    totalRatings: state.totalRatings,
    getAllReviews,
    getMetaReviews
  }}>
    {children}
  </RatingsAndReviewsContext.Provider>)
}