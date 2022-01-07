import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import { Pricing } from './Pricing.jsx'

let priceAndStyleSelectorStyle = {
  display: 'flex',
  flexDirection: 'column'
}

let styleSelectorStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export const PriceAndStyle = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    productStyles,
    getProductStyles,
    resetProductValue,
    featuredStyleIndex
  } = useContext(OverviewContext);

  useEffect(() => {
    getProductStyles(currentProductId)
    return (() => {
      resetProductValue([])
    })
  }, [currentProductId])

  let salePrice = productStyles.data ? productStyles.data.results[featuredStyleIndex].sale_price : ''
  let productPrice = productStyles.data ? productStyles.data.results[featuredStyleIndex].original_price : ''

  let productStylesArray = productStyles.data ? productStyles.data.results : []
  let displayedPrice = salePrice ? (productPrice + ' ' + salePrice) : productPrice
  let productStyleName = productStyles.data ? productStyles.data.results[featuredStyleIndex].name : ''
  let styleString = 'Style > '
  return (
    <div
      className="priceAndStyleSelector"
      style={priceAndStyleSelectorStyle}>
      <div
        className="price">
          <Pricing />
      </div>
      <div
        className="styleSelectorAndDropDown"
        style={styleSelectorStyle}>
        <div
          className="currentProductStyle">
          {styleString}
        </div>
        <div
          name="Style"
          className="styleSelected">
            {productStyleName}
        </div>
      </div>
    </div>
  );
}