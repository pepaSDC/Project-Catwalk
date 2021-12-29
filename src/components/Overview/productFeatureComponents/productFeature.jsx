import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'

import { ProductGalleryMainPhoto } from './productGalleryComponents/ProductGalleryMainPhoto.jsx'
import { ProductGalleryThumbnails } from './productGalleryComponents/ProductGalleryThumbnails.jsx'

import { ProductInterface } from './productInterface.jsx'

const productFeatureStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const productGalleryStyle = {
  display: 'flex',
  height: '100%',
  width: '50%',
}

const productInterfaceStyle = {
  display: 'flex',
  height: '100%',
  width: '50%'
}

export const ProductFeature = () => {
  const { currentProductId } = useContext(GlobalContext);

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