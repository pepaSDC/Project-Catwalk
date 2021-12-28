import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

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
  const { getProductStyles, productStyles } = useContext(OverviewContext);
  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id)
  }, [id])

  const productPrice = productStyles.data ? productStyles.data.results[0].original_price : {}

  console.log('line 25: ', productPrice);

  return (
    <div
      className="priceAndStyleSelector"
      style={priceAndStyleSelectorStyle}>
      <div
        className="price">
          Price
      </div>
      <div
        className="styleSelectorAndDropDown"
        style={styleSelectorStyle}>
        <div
          className="currentProductStyle">
          currentProductStyle
        </div>
        <div
          className="styleSelectorDropdown">
          StyleSelectorDropdown
        </div>
      </div>
    </div>
  );
}