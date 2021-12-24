import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
import api from '../api.js';

//Initial state
const initialState = {
  allProducts: [],
  currentProductId:1
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions/functions
  function getAllProducts() {
    api.getAllProducts((productsPayload) => {
      dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: productsPayload
      });
    });
  }

  function updateCurrentProductId(id) {
    dispatch({
      type: 'UPDATE_CURRENT_ID',
      payload: id
    });
  }


  return(<GlobalContext.Provider value={{
    allProducts: state.allProducts,
    currentProductId: state.currentProductId,
    getAllProducts,
    updateCurrentProductId
  }}>
    {children}
  </GlobalContext.Provider>)
}