import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import { ProductGalleryThumbnails } from './ProductGalleryThumbnails.jsx'
import leftArrow from './arrow-gray-left.png'
import rightArrow from './arrow-gray-right.png'

export const ProductGalleryMainPhoto = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles,
    featuredStyleIndex, featuredProductImageIndex,
    decrementFeaturedPhotoIndex, incrementFeaturedPhotoIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id);
  }, [id])

  const ProductGalleryThumbnailsStyle = {
    position: 'relative',
    top: '10px'
  }

  const leftRightButtonsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  }

  const leftButtonStyle = {
    display: 'flex',
    width: '25px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const concealLeftButtonStyle = {
    display: 'flex',
    width: '25px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: '0'
  }

  const rightButtonStyle = {
    display: 'flex',
    width: '25px',
    position: 'relative',
    right: '53px',
  }

  const concealRightButtonStyle = {
    display: 'flex',
    width: '25px',
    position: 'relative',
    right: '53px',
    opacity: '0'
  }

  let productStylesArray = productStyles.data ? productStyles.data.results : []
  let featuredProductPhoto = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos[featuredProductImageIndex].url : ''
  let productStylesArrayMaxIndex = productStyles.data ? (productStylesArray.length - 1) : 0
  let leftButtonStyling = (featuredProductImageIndex === 0) ? concealLeftButtonStyle : leftButtonStyle
  let rightButtonStyling = (featuredProductImageIndex === productStylesArrayMaxIndex) ? concealRightButtonStyle : rightButtonStyle

  const incrementProductStylesArrayIndex = (event) => {
    event.preventDefault();
    if (featuredProductImageIndex !== productStylesArrayMaxIndex) {
      let newIndex = (featuredProductImageIndex + 1)
      incrementFeaturedPhotoIndex(newIndex);
    }
  }

  const decrementProductStylesArrayIndex = (event) => {
    event.preventDefault();
    if (featuredProductImageIndex !== 0) {
      let newIndex = (featuredProductImageIndex - 1)
      decrementFeaturedPhotoIndex(newIndex);
    }

  }

  return (
    <div
      className="productGalleryPhoto"
      style={{
        display: 'flex',
        flexDirection: 'row',
        // width: '40vw',
        // height: '50vh',
        backgroundImage: `url(${featuredProductPhoto})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexGrow: 4,
      }}>
        <ProductGalleryThumbnails
          style={ProductGalleryThumbnailsStyle}/>
      <div
        className="leftRightButtonsContainer"
        style={leftRightButtonsContainerStyle}
        >
        <img
          src={leftArrow}
          style={leftButtonStyling}
          className="leftButton"
          onClick={decrementProductStylesArrayIndex}>
        </img>
        <img
          src={rightArrow}
          style={rightButtonStyling}
          className="rightButton"
          onClick={incrementProductStylesArrayIndex}>
        </img>
      </div>
    </div>
  );
}