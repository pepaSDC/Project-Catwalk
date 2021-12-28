import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'
const axios = require('axios');

let productGalleryStyle = {
  display: 'flex',
  flexGrow: 8,
}

export const ProductGallery = () => {
  const { currentProductId } = useContext(GlobalContext);

  axios.get(`localhost:3000/products/${currentProductId}/styles`)
  .then((productStyles) => {
    console.log('current product styles: ', productStyles);
  })
  .catch((error) => {
    console.error(error);
  })

  return (
    <div
      className="productGallery"
      style={productGalleryStyle}>
    </div>
  );
}