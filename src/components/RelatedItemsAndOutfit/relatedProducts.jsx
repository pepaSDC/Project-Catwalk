import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState.js'

export const RelatedProducts = () => {
  const { getAllProducts, allProducts } = useContext(GlobalContext);
  // console.log('all products:::',allProducts);
  useEffect(() => {
    getAllProducts();
  },[]);
  return (
    <div>
      <div className="app">Hello From RelatedProducts</div>
    </div>
  );
}