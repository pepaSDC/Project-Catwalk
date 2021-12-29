import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import { ProductGalleryThumbnails } from './ProductGalleryThumbnails.jsx'

// let productGalleryStyle = {
//   display: 'flex',
//   flexGrow: 8,
// }


export const ProductGalleryMainPhoto = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles,
    featuredStyleIndex, featuredProductImageIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id);
  }, [id])

  let productStylesArray = productStyles.data ? productStyles.data.results : []
  let featuredProductPhoto = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos[featuredProductImageIndex].url : ''

  // console.log('line 27 in productGallery: ', productStylesArray);
  // console.log('line 28 in productGallery: ', featuredProductPhoto);

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
        <ProductGalleryThumbnails />
    </div>
  );
}