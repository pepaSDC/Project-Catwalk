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
    getProductStyles, productStyles, featuredStyleIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id)
  }, [id])

  let productPrice = productStyles.data ? productStyles.data.results[featuredStyleIndex].original_price : ''
  let salePrice = productStyles.data ? productStyles.data.results[featuredStyleIndex].sale_price : ''

  let displayedPrice = salePrice ? (productPrice + ' ' + salePrice) : productPrice

  let productStyleName = productStyles.data ? productStyles.data.results[featuredStyleIndex].name : ''


  let productStylesArray = productStyles.data ? productStyles.data.results : []

  // console.log('line 41 in priceAndStyle: ', productStylesArray);

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
          Style >
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