import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'

import { ProductGallery } from './productGallery.jsx'
import { ProductInterface } from './productInterface.jsx'

const productFeatureStyle = {
  display: 'flex',
  flexDirection: 'row',
}

export const ProductFeature = () => {
  // const { getAllProducts, allProducts } = useContext(GlobalContext);
  // useEffect(() => {getAllProducts()}, []);
  return (
    <div
      className="productFeature"
      style={productFeatureStyle}>
        <ProductGallery />
        <ProductInterface />
    </div>
  );
}