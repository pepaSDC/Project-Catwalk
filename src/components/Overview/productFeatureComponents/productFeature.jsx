import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'
import { OverviewContext } from '../../../context/OverviewState.js'


import { ProductGalleryMainPhoto } from './productGalleryComponents/ProductGalleryMainPhoto.jsx'
import { ProductGalleryThumbnails } from './productGalleryComponents/ProductGalleryThumbnails.jsx'

import { ProductInterface } from './productInterface.jsx'

const productFeatureStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: '50vh'
}

const productGalleryStyle = {
  display: 'flex',
  height: '100%',
  width: '66%',
}

const productGalleryExpandedStyle = {
  display: 'flex',
  height: '100%',
  width: '100%',
}

const productInterfaceStyle = {
  display: 'flex',
  height: '100%',
  width: '34%'
}

const productInterfaceConcealedStyle = {
  display: 'flex',
  height: '100%',
  width: '34%'
}

export const ProductFeature = () => {
  const { currentProductId } = useContext(GlobalContext);
  const { currentView } = useContext(OverviewContext);

  let galleryStyling = (currentView === 'default') ? productFeatureStyle : productGalleryExpandedStyle
  let interfaceStyling = (currentView === 'default') ? productInterfaceStyle : productInterfaceConcealedStyle

  return (
    <div
      className="productFeature"
      style={productFeatureStyle}>
      <div
      className="productGalleryOuter"
      style={productGalleryStyle}>
        <ProductGalleryMainPhoto />
    </div>
      <div
      className="productInterface"
      style={productInterfaceStyle}>
        <ProductInterface />
      </div>
    </div>
  );
}