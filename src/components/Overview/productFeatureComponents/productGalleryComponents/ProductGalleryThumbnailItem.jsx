/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

export const ProductGalleryThumbnailItem = (props) => {
  // const { currentProductId } = useContext(GlobalContext);
  const {
    // productStyles,
    // getProductStyles,
    updateFeaturedPhoto,
    featuredProductImageIndex
  } = useContext(OverviewContext);

  const changeFeaturedPhoto = (event) => {
    updateFeaturedPhoto(props.index)
  }

  const isFeaturedStyle = {
    backgroundColor: '#999999',
    height: '5px',
    width: '50px',
    marginRight: '3px',
    marginBottom: '3px',
    boxShadow: '0px 1px 10px -3px #000000'
  }

  const isNotFeaturedStyle = {
    backgroundColor: '#999999',
    height: '5px',
    width: '50px',
    opacity: '0',
    marginRight: '3px',
    marginBottom: '3px',
    boxShadow: '0px 1px 10px -3px #000000'
  }

  const thumbnailContainerStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  let featuredStyle = (props.featuredProduct === props.index) ? isFeaturedStyle : isNotFeaturedStyle;

  return (
    <div
      className="thumbnailContainer"
      style={thumbnailContainerStyle}>
      <div
        className="productGalleryThumbnailItem"
        onClick={changeFeaturedPhoto}
        style = {{
          backgroundImage: `url(${props.item.thumbnail_url})`,
          backgroundSize: 'cover',
          height: '50px',
          width: '50px',
          marginRight: '3px',
          marginBottom: '3px',
          boxShadow: '0px 1px 10px -3px #000000'
        }}>
      </div>
      <div
        className="selectionIndicator"
        style={featuredStyle}>
      </div>
    </div>
  );
}