import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { StyleThumbnail } from './styleThumbnail.jsx'
import { OverviewContext } from '../../../../context/OverviewState.js'

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
  const {
    productStyles,
    getProductStyles,
    resetProductValue,
    featuredStyleIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id)
    return (() => {
      resetProductValue([])
    })
  }, [id])

  let productStylesArray = productStyles.data ? productStyles.data.results : []

  // console.log('line 30 in styleShowcase: ', productStylesArray);

  return (
    <div
      style={StyleShowcaseStyle}
      className="styleShowcase"
      >
      <div
        style={styleShowcaseRowStyle}
        className="styleShowcaseRow1">
          {productStylesArray.map(
            (styleOption, index) =>
              <StyleThumbnail
                thumbnail={styleOption.photos[1].thumbnail_url}
                key={styleOption.style_id}
                index={index}
                />
          )}
      </div>
      {/* <div
        style={styleShowcaseRowStyle}
        className="styleShowcaseRow2">
          <StyleThumbnail />
          <StyleThumbnail />
          <StyleThumbnail />
          <StyleThumbnail />
      </div> */}
    </div>
  );
}