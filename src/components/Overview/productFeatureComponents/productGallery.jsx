import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'
import api from '../../../../server/api.js';

let productGalleryStyle = {
  display: 'flex',
  flexGrow: 8,
}

export const ProductGallery = () => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      className="productGallery"
      style={productGalleryStyle}>
    </div>
  );
}