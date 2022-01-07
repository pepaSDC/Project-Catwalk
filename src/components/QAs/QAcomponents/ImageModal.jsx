/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const stylePicture = {
  margin: '15vh auto',
  height: '70vh',
  textAlign: 'center'
};

const ImageModal = ({ open, image, onClose }) => {
  if (!open) { return null; };
  return (
    <div>
      <div className='modalOverlay' onClick={onClose}></div>
      <div className='iModal'>
        <img style={stylePicture} src={image} className='imageModal' />
      </div>
    </div>
  );
};

export default ImageModal;