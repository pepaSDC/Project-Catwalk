/* eslint-disable react/prop-types */
import React, { createRef, useCallback, useState, useContext } from 'react';
import { OverviewContext } from '../../../../context/OverviewState.js'
import leftArrow from './arrow-gray-left.png'
import rightArrow from './arrow-gray-right.png'
import closeIcon from './close-icon.png'
import './modalImageStyles.css'

export const ImageModal = ( props ) => {
  const {
    decrementFeaturedPhotoIndex, incrementFeaturedPhotoIndex
  } = useContext(OverviewContext);

  const modalLeftRightButtonsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around'
  }

  const modalLeftButtonStyle = {
    display: 'flex',
    width: '50px',
    height: '50px',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat'
  }

  const modalConcealLeftButtonStyle = {
    display: 'flex',
    width: '25px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: '0'
  }

  const modalRightButtonStyle = {
    display: 'flex',
    width: '50px',
    height: '50px',
    // position: 'relative',
    // right: '25px'
  }

  const modalConcealRightButtonStyle = {
    display: 'flex',
    width: '25px',
    opacity: '0'
  }

  const modalAllButtonsContainerStyle = {
    display: 'flex',
    width: '100%',
    zIndex: '4',
  }

  const closeIconStyle = {
    display: 'flex',
    width: '25px',
    height: '25px',
    position: 'relative',
  }

  const closeIconButtonContainerStyle = {
    display: 'flex',
    width: '88%',
    justifyContent: 'flex-end'
  }

  const imageModalBackgroundStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'fixed',
    zIndex: '3',
    left: '0',
    top: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }

  let modalLeftButtonStyling = (props.index === 0) ? modalConcealLeftButtonStyle : modalLeftButtonStyle
  let modalRightButtonStyling = (props.index === props.max) ? modalConcealRightButtonStyle : modalRightButtonStyle

  const handleCloseModal = (event) => {
    props.toggleImageModal(false);
  }

  const incrementProductStylesArrayIndex = (event) => {
    event.preventDefault();
    if (props.index !== props.max) {
      let newIndex = (props.index + 1)
      incrementFeaturedPhotoIndex(newIndex);
    }
  }

  const decrementProductStylesArrayIndex = (event) => {
    event.preventDefault();
    if (props.index !== 0) {
      let newIndex = (props.index - 1)
      decrementFeaturedPhotoIndex(newIndex);
    }
  }

  const modalPictureContainerStyling = {
    display:'flex',
    flexDirection: 'row',
    backgroundImage: `url(${props.featuredPhoto})`,
    height: '75vh',
    alignItems: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div
      className="imageModalBackground"
      style={imageModalBackgroundStyle}>
        <div
          className="closeIconButtonContainer"
          style={closeIconButtonContainerStyle}>
          <div
            className="closeIconButton"
            style={closeIconStyle}>
          <img
            src={closeIcon}
            className="closeIcon"
            style={closeIconStyle}
            onClick={handleCloseModal}>
          </img>
        </div>
      </div>
    <div
      className="modalPictureContainer"
      style={modalPictureContainerStyling}>
    <div
      className="modalAllButtonsContainer"
      style={modalAllButtonsContainerStyle}>
        <div
          className="modalLeftRightButtonsContainer"
          style={modalLeftRightButtonsContainerStyle}>
            <img
              src={leftArrow}
              className="modalLeftButton"
              style={modalLeftButtonStyling}
              onClick={decrementProductStylesArrayIndex}>
            </img>
            <img
              src={rightArrow}
              className="modalRightButton"
              style={modalRightButtonStyling}
              onClick={incrementProductStylesArrayIndex}>
            </img>
          </div>
        </div>
      </div>
    </div>
  );
}