import React, { createContext, useReducer } from 'react';
import AppReducer from './RRAppReducer.js';
const axios = require('axios');

//Initial state
const initialState = {
  allReviews: [],
  meta: [],
  averageRating: [],
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
        console.log('butts',results.data);
        dispatch({
          type: 'GET_METADATA',
          payloud: results.data
        })
      })
  }
  //actions/functions
  // function getAllReviews() {
  //   axios.get('http://localhost:3000/reviews')
  //     .then((productsPayload) => {
  //       dispatch({
  //         type: 'GET_ALL_PRODUCTS',
  //         payload: productsPayload
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  // }

  // function updateCurrentProductId(id) {
  //   axios.get(`http://localhost:3000/products/${id}`)
  //   .then((currentProductPayload) => {
  //     dispatch({
  //       type: 'UPDATE_CURRENT_ID',
  //       payload: id
  //     })
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })

  // }


  return(<RatingsAndReviewsContext.Provider value={{
    allReviews: state.allReviews,
    meta: state.meta,
    averageRating: state.averageRating,
    getAllReviews,
    getMetaReviews
  }}>
    {children}
  </RatingsAndReviewsContext.Provider>)
}