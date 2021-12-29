/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'


export const ProductGalleryThumbnailItem = (props) => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      className="productGalleryThumbnailItem"
        style = {{
        backgroundImage: `url(${props.thumbnail})`,
        backgroundSize: 'cover',
        height: '50px',
        width: '50px',
        marginRight: '3px',
        marginBottom: '3px'
      }}>
    </div>
  );
}