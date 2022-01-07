import { GlobalContext } from '../../context/GlobalState.js'
import React, { useState, useEffect, useContext } from 'react'

import { HeaderBar } from './headerBarComponents/headerBar.jsx'

import { ProductFeature } from './productFeatureComponents/productFeature.jsx'
import { ProductDescription } from './productDescriptionComponents/productDescription.jsx'

let divStyle = {
  padding: '10px',
  // margin: '10px',
}

let subheaderStyle = {
  display: 'flex',
  padding: '10px',
  justifyContent: 'space-around'
  // margin: '10px',
}

let featureStyle = {
  padding: '10px',
}

let galleryInterfaceStyle = {
  padding: '10px',
  width: '100%'
}

export const Overview = () => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
    id="Overview"
    className="overview">
      <div
        style={divStyle}
        className="headerBar">
        <HeaderBar />
      </div>

      <div
        style={subheaderStyle}
        className="subHeaderBar">
        BUY ONE GET ONE HALF OFF ON ALL SELECT STYLES!
      </div>

      <div
        style={galleryInterfaceStyle}
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