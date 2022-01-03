/* eslint-disable react/prop-types */
// import React from 'react'
import React, { useState, useEffect, useContext } from 'react'
// import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

export const ProductGalleryThumbnailItem = (props) => {
  // const { currentProductId } = useContext(GlobalContext);
  // const {
  //   getProductStyles, productStyles,
  //   updateFeaturedPhoto, featuredProductImageIndex
  // } = useContext(OverviewContext);
    const { updateFeaturedPhoto } = useContext(OverviewContext);

  const changeFeaturedPhoto = (event) => {
    updateFeaturedPhoto(props.index)
  }

  return (
    <div
      className="productGalleryThumbnailItem"
      onClick={changeFeaturedPhoto}
        style = {{
        backgroundImage: `url(${props.item.thumbnail_url})`,
        backgroundSize: 'cover',
        height: '50px',
        width: '50px',
        marginRight: '3px',
        marginBottom: '3px'
      }}>
    </div>
  );
}