import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'

export const ProductName = () => {
  // const { getAllProducts, allProducts } = useContext(GlobalContext);
  // useEffect(() => {
  //   getAllProducts();
  // }, []);
  return (
    <div
      className="productName">
        Expanded? Product Name
    </div>
  );
}