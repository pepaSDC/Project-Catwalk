import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import { ProductGalleryThumbnails } from './ProductGalleryThumbnails.jsx'
import leftArrow from './arrow-gray-left.png'
import rightArrow from './arrow-gray-right.png'
import fullscreenIcon from './fullscreen-icon.png'

export const ProductGalleryMainPhoto = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    resetProductValue,
    toggleView, currentView,
    productStyles, getProductStyles,
    featuredStyleIndex, featuredProductImageIndex,
    decrementFeaturedPhotoIndex, incrementFeaturedPhotoIndex
  } = useContext(OverviewContext);

  useEffect(() => {
    getProductStyles(currentProductId)
    return (() => {
      resetProductValue([]);
    })
  }, [currentProductId])

  const ProductGalleryThumbnailsStyle = {
    position: 'relative',
    top: '10px'
  }

  const allButtonsContainerStyle = {
    display: 'flex',
    width: '100%'
  }

  const leftRightButtonsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  }

  const fullscreenButtonContainerStyle = {
    display: 'flex',
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
    right: '28px',
  }

  const concealRightButtonStyle = {
    display: 'flex',
    width: '25px',
    position: 'relative',
    right: '28px',
    opacity: '0'
  }

  const fullscreenIconStyle = {
    width: '25px',
    height: '25px',
    position: 'relative',
    right: '20px',
  }

  let productStylesArray = productStyles.data ? productStyles.data.results : []
  let featuredProductPhoto = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos[featuredProductImageIndex].url : ''
  let productStylesArrayMaxIndex = productStyles.data ? (productStylesArray.length - 1) : 0
  let leftButtonStyling = (featuredProductImageIndex === 0) ? concealLeftButtonStyle : leftButtonStyle
  let rightButtonStyling = (featuredProductImageIndex === productStylesArrayMaxIndex) ? concealRightButtonStyle : rightButtonStyle

  const handleToggle = (event) => {
    event.preventDefault();
    let newStatus = (currentView === 'default') ? 'expanded' : 'default'
    toggleView(newStatus);
    console.log('new view is now: ', currentView);
  }

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
        <ProductGalleryThumbnails style={ProductGalleryThumbnailsStyle}/>
      <div
        className="allButtonsContainer"
        style={allButtonsContainerStyle}>
        <div
          className="leftRightButtonsContainer"
          style={leftRightButtonsContainerStyle}>
          <img
            src={leftArrow}
            className="leftButton"
            style={leftButtonStyling}
            onClick={decrementProductStylesArrayIndex}>
          </img>
          <img
            src={rightArrow}
            className="rightButton"
            style={rightButtonStyling}
            onClick={incrementProductStylesArrayIndex}>
          </img>
        </div>
        <div
          className="fullscreenButtonContainer"
          style={fullscreenButtonContainerStyle}>
          <img
            src={fullscreenIcon}
            className="fullScreenIcon"
            style={fullscreenIconStyle}
            onClick={handleToggle}>
          </img>
        </div>
      </div>
    </div>
  );
}