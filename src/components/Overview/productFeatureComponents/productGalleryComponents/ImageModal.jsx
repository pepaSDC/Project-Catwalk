/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

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

export const ImageModal = ( props ) => {

  const handleCloseModal = (event) => {
    props.toggleImageModal(false);
  }



  return (
    <div
    className="imageModalBackground"
    style={imageModalBackgroundStyle}
    onClick={handleCloseModal}>
      <div
        style={{
          display:'flex',
          flexDirection: 'column',
          backgroundImage: `url(${props.featuredPhoto})`,
          height: '75vh',
          alignItems: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
      </div>
    </div>
  );
}