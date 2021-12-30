/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'


export const StyleThumbnail = (props) => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles,
    updateCurrentStyle, featuredStyleIndex
  } = useContext(OverviewContext);

  const changeStyle = (event) => {
    updateCurrentStyle(props.index)
  }

  return (
    <div
      className="styleThumbnail"
      onClick={changeStyle}
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