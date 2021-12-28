import React, { createContext, useReducer } from 'react';
import OverviewReducer from './OverviewReducer.js';
const axios = require('axios');

const initialOverviewState = {
  productInfo: {},
  productStyles: []
}

export const OverviewContext = createContext(initialOverviewState);

export const OverviewProvider = ({ children }) => {
  const [overviewState, overviewDispatch] = useReducer(OverviewReducer, initialOverviewState);

  //actions/functions
  function getProductInfo(id) {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((productInfoPayload) => {
        dispatch({
          type: 'GET_PRODUCT_INFO',
          payload: productInfoPayload
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  function getProductStyles(id) {
    axios.get(`http://localhost:3000/products/${id}/styles`)
      .then((productStylesPayload) => {
        dispatch({
          type: 'GET_PRODUCT_INFO',
          payload: productStylesPayload
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }


  return(<OverviewContext.Provider value={{
    allProducts: state.productInfo,
    productStyles: state.productStyles,
    getProductInfo,
    getProductStyles
  }}>
    {children}
  </OverviewContext.Provider>)
}