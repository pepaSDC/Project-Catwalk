/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'

// const styleThumbnailStyle = {
//   borderRadius: '50%',
//   backgroundImage: `url(${thumbnail})`,
//   height: '40px',
//   width: '40px',
//   marginRight: '3px',
//   marginBottom: '3px'
// }

export const StyleThumbnail = (props) => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      className="styleThumbnail"
      style = {{
        borderRadius: '50%',
        backgroundImage: `url(${props.thumbnail})`,
        backgroundSize: 'cover',
        height: '40px',
        width: '40px',
        marginRight: '3px',
        marginBottom: '3px'
      }}>
    </div>
  );
}