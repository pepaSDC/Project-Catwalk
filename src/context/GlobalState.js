import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';
import api from '../api.js';

//Initial state
const initialState = {
  allProducts: []
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
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



  return(<GlobalContext.Provider value={{
    allProducts: state.allProducts,
    getAllProducts
  }}>
    {children}
  </GlobalContext.Provider>)
}