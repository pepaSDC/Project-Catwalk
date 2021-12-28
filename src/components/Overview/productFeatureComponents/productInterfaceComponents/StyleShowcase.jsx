import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { StyleThumbnail } from './styleThumbnail.jsx'

let StyleShowcaseStyle = {
  display: 'flex',
  flexDirection: 'column'
}

let styleShowcaseRowStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export const StyleShowcase = () => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      style={StyleShowcaseStyle}
      className="styleShowcase"
      >
      <div
        style={styleShowcaseRowStyle}
        className="styleShowcaseRow1">
          <StyleThumbnail />
          <StyleThumbnail />
          <StyleThumbnail />
          <StyleThumbnail />
      </div>
      <div
        style={styleShowcaseRowStyle}
        className="styleShowcaseRow2">
          <StyleThumbnail />
          <StyleThumbnail />
          <StyleThumbnail />
          <StyleThumbnail />
      </div>
    </div>
  );
}