import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'

const styleThumbnailStyle = {
  borderRadius: '50%',
  backgroundColor: 'pink',
  height: '40px',
  width: '40px',
  marginRight: '3px',
  marginBottom: '3px'
}

export const StyleThumbnail = () => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      className="styleThumbnail"
      style={styleThumbnailStyle}>
    </div>
  );
}