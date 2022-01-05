/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import blackCircle from './black-circle.png'

export const StyleThumbnail = (props) => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles,
    updateCurrentStyle, featuredStyleIndex
  } = useContext(OverviewContext);

  const changeStyle = (event) => {
    updateCurrentStyle(props.index)
  }

  const blackIndicatorCircleStyle = {
    height: '20px',
    width: '20px',
    position: 'relative',
    bottom: '5px',
    left: '5px',
  }

  const isNotFeaturedStyleThumbnail = {
    height: '20px',
    width: '20px',
    position: 'relative',
    bottom: '5px',
    left: '5px',
    opacity: '0',
  }

  let featuredStyleIndicator = (props.featuredStyle === props.index) ? blackIndicatorCircleStyle : isNotFeaturedStyleThumbnail

  return (
    <div
      className="styleThumbnail"
      onClick={changeStyle}
        style = {{
          display: 'flex',
          justifyContent: 'flex-end',
          borderRadius: '50%',
          backgroundImage: `url(${props.thumbnail})`,
          backgroundSize: 'cover',
          height: '40px',
          width: '40px',
          marginRight: '3px',
          marginBottom: '3px'
        }}>
      <img
        className="styleSelectionIndicator"
        style={featuredStyleIndicator}
        src={blackCircle}>
      </img>
    </div>
  );
}