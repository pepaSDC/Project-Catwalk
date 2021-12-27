import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'

const productGalleryStyle = {
  display: 'flex',
  flexGrow: 8
}

export const ProductGallery = () => {
  // const { getAllProducts, allProducts } = useContext(GlobalContext);
  // useEffect(() => {getAllProducts()}, []);
  return (
    <div
      className="productGallery"
      style={productGalleryStyle}>
    </div>
  );
}