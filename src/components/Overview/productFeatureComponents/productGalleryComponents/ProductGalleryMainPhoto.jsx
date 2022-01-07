import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import { ProductGalleryThumbnails } from './ProductGalleryThumbnails.jsx'
import { ImageModal } from './ImageModal.jsx';
import leftArrow from './arrow-gray-left.png'
import rightArrow from './arrow-gray-right.png'
import fullscreenIcon from './fullscreen-icon.png'

export const ProductGalleryMainPhoto = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    resetProductValue,
    productStyles, getProductStyles,
    featuredStyleIndex, featuredProductImageIndex,
    decrementFeaturedPhotoIndex, incrementFeaturedPhotoIndex
  } = useContext(OverviewContext);

  const [displayImageModal, setDisplayImageModal] = useState(false);

  useEffect(() => {
    getProductStyles(currentProductId)
    return (() => {
      resetProductValue([]);
    })
  }, [currentProductId])

  const productGalleryThumbnailContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }

  const ProductGalleryThumbnailsStyle = {
    position: 'relative',
    top: '10px'
  }

  const allButtonsContainerStyle = {
    display: 'flex',
    width: '100%'
  }

  const fullscreenButtonContainerStyle = {
    display: 'flex',
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
  let productStylesArrayMaxIndex = productStyles.data ? (productStylesArray.length - 1) : 0
  let featuredProductPhoto = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos[featuredProductImageIndex].url : ''
  let leftButtonStyling = (featuredProductImageIndex === 0) ? concealLeftButtonStyle : leftButtonStyle
  let rightButtonStyling = (featuredProductImageIndex === productStylesArrayMaxIndex) ? concealRightButtonStyle : rightButtonStyle


  const openModal = (event) => {
    event.preventDefault();
    setDisplayImageModal(true);
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

  const handleArrow = (event) => {
    console.log(event.key)
    event.preventDefault();
    if (event.key === 'ArrowLeft') {
      if (featuredProductImageIndex !== 0) {
        let newIndex = (featuredProductImageIndex - 1)
        decrementFeaturedPhotoIndex(newIndex);
      }
    }
    if (event.key === 'ArrowRight') {
      if (featuredProductImageIndex !== productStylesArrayMaxIndex) {
        let newIndex = (featuredProductImageIndex + 1)
        incrementFeaturedPhotoIndex(newIndex);
      }
    }
  }


  return (
    <div
    tabIndex={-1}
    onKeyDown={handleArrow}
      className="productGalleryPhoto"
      style={{
        outline: 'none',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundImage: `url(${featuredProductPhoto})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        {displayImageModal && (
        <ImageModal
          className="ImageModal"
          index={featuredProductImageIndex}
          max={productStylesArrayMaxIndex}
          toggleImageModal={setDisplayImageModal}
          featuredPhoto={featuredProductPhoto}/>
        )}
        <div
          style={productGalleryThumbnailContainerStyle}
          >
          <ProductGalleryThumbnails style={ProductGalleryThumbnailsStyle}/>
        </div>
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
            onClick={openModal}
            >
          </img>
        </div>
      </div>
    </div>
  );
}