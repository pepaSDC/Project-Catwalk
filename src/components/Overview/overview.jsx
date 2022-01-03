import { GlobalContext } from '../../context/GlobalState.js'
import { OverviewContext } from '../../context/OverviewState.js'
import React, { useState, useEffect, useContext } from 'react'

import { HeaderBar } from './headerBarComponents/headerBar.jsx'

import { ProductFeature } from './productFeatureComponents/productFeature.jsx'
import { ProductDescription } from './productDescriptionComponents/productDescription.jsx'

let divStyle = {
  padding: '10px',
  // margin: '10px',
}

let featureStyle = {
  padding: '10px',
}

export const Overview = () => {
  // const { currentProductId } = useContext(GlobalContext);
  // const { getProductInfo, productInfo } = useContext(OverviewContext);

  // useEffect(() => {
  //   getProductInfo(currentProductId)
  // }, [currentProductId])


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
        style={featureStyle}
        className="productFeature">
        <ProductFeature />
      </div>

      <div
        style={divStyle}
        className="productDescription">
        <ProductDescription
          />
      </div>
    </div>
  );
}