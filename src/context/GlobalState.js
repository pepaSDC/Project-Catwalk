import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
// import api from '../api.js';

const axios = require('axios');

//Initial state
const initialState = {
  allProducts: [],
  currentProductId: 40344
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions/functions
  function getAllProducts() {
    axios.get('/products')
      .then((productsPayload) => {
        dispatch({
          type: 'GET_ALL_PRODUCTS',
          payload: productsPayload
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  function updateCurrentProductId(id) {
    axios.get(`/products/${id}`)
    .then((currentProductPayload) => {
      dispatch({
        type: 'UPDATE_CURRENT_ID',
        payload: id
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function getAverageReview(id) {
    axios.get(`/reviews/meta/?product_id=${id}`)
      .then((results) => {
        let absolutetotal = 0;
        let totalratings = 0;
        for (var key in results.data.ratings) {
          totalratings += Number(results.data.ratings[key])
          absolutetotal += (Number(results.data.ratings[key]) * Number(key));
        }
        let average = Math.round((absolutetotal/totalratings) * 4) / 4;
        return average;
      })
      .catch(err => {
        console.log(err)
      });
    }


  return(<GlobalContext.Provider value={{
    allProducts: state.allProducts,
    currentProductId: state.currentProductId,
    getAllProducts,
    updateCurrentProductId,
    getAverageReview
  }}>
    {children}
  </GlobalContext.Provider>)
}