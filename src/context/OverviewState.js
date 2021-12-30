import React, { createContext, useReducer } from 'react';
import OverviewReducer from './OverviewReducer.js';
const axios = require('axios');

const initialOverviewState = {
  productInfo: {},
  productStyles: [],
  featuredStyleIndex: 0,
  featuredProductImageIndex: 0,
}

export const OverviewContext = createContext(initialOverviewState);

export const OverviewProvider = ({ children }) => {
  const [overviewState, overviewDispatch] = useReducer(OverviewReducer, initialOverviewState);

  //actions/functions
  function getProductInfo(id) {
    axios.get(`http://localhost:3000/products/${id}`)
      .then((productInfoPayload) => {
        overviewDispatch({
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
        overviewDispatch({
          type: 'GET_PRODUCT_STYLES',
          payload: productStylesPayload
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  function updateCurrentStyle (id) {
    overviewDispatch({
      type: 'UPDATE_CURRENT_STYLE',
      payload: id
    })
  }

  function updateFeaturedPhoto (id) {
    overviewDispatch({
      type: 'UPDATE_FEATURED_PHOTO',
      payload: id
    })
  }

  return(<OverviewContext.Provider value={{
    productInfo: overviewState.productInfo,
    productStyles: overviewState.productStyles,
    featuredStyleIndex: overviewState.featuredStyleIndex,
    featuredProductImageIndex: overviewState.featuredProductImageIndex,
    getProductInfo,
    getProductStyles,
    updateCurrentStyle,
    updateFeaturedPhoto
  }}>
    {children}
  </OverviewContext.Provider>)
}