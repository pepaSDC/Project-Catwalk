import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import { ProductGalleryThumbnails } from './ProductGalleryThumbnails.jsx'


export const ProductGalleryMainPhoto = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    productStyles,
    getProductStyles,
    resetProductValue,
    featuredStyleIndex,
    featuredProductImageIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id)
    return (() => {
      resetProductValue([])
    })
  }, [id])

  let productStylesArray = productStyles.data ? productStyles.data.results : []
  let featuredProductPhoto = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos[featuredProductImageIndex].url : ''

  return (
    <div
      className="productGalleryPhoto"
      style={{
        display: 'flex',
        width: '30vw',
        height: '40vh',
        backgroundImage: `url(${featuredProductPhoto})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexGrow: 4,
      }}>
        <ProductGalleryThumbnails
          currentStyleIndex={productStyles}
          currentProductStyle={productStyles}/>
    </div>
  );
}