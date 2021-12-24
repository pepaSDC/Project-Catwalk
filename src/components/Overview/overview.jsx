import { GlobalContext } from '../../context/GlobalState.js'
import React, { useState, useEffect, useContext } from 'react'

import { HeaderBar } from './headerBarComponents/headerBar.jsx'

import { ProductFeature } from './productFeatureComponents/productFeature.jsx'
import { ProductDescription } from './productDescriptionComponents/productDescription.jsx'

const divStyle = {
  padding: '10px',
  margin: '10px',
  border: 'solid'
}

export const Overview = () => {
  const { getAllProducts, allProducts } = useContext(GlobalContext);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div
    className="overview">

      <div
        style={divStyle}
        className="headerBar">
        <HeaderBar />
      </div>

      <div
        style={divStyle}
        className="subHeaderBar">
        subHeaderBar Text
      </div>

      <div
        style={divStyle}
        className="productFeature">
        <ProductFeature />
      </div>

      <div
        style={divStyle}
        className="productDescription">
        <ProductDescription />
      </div>

    </div>
  );
}