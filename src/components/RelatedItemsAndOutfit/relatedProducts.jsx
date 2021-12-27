import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState.js'

export const RelatedProducts = () => {
<<<<<<< HEAD
  const { currentProductId } = useContext(GlobalContext);
  console.log('current p id from related products', currentProductId)
=======
  const { getAllProducts, allProducts } = useContext(GlobalContext);
  // console.log('all products:::',allProducts);
  useEffect(() => {
    getAllProducts();
  },[]);
>>>>>>> c12af21 (added some components to overview)
  return (
    <div>
      <div className="app">Hello From RelatedProducts</div>
    </div>
  );
}