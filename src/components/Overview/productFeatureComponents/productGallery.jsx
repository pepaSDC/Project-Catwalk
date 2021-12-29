import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'
import { OverviewContext } from '../../../context/OverviewState.js'

// let productGalleryStyle = {
//   display: 'flex',
//   flexGrow: 8,
// }



export const ProductGallery = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles,
    getProductInfo, productInfo,
    featuredStyleIndex, featuredProductImageIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id);
  }, [id])

  let productStylesArray = productStyles.data ? productStyles.data.results : []
  let featuredProductPhoto = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos[featuredProductImageIndex].url : ''

  console.log('line 27 in productGallery: ', productStylesArray);
  console.log('line 28 in productGallery: ', featuredProductPhoto);

  return (
    <div
      className="productGallery"
      style={{
        display: 'flex',
        width: '50vw',
        height: '50vh',
        backgroundImage: `url(${featuredProductPhoto})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        flexGrow: 8,
      }}>
    </div>
  );
}