import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

const pricingDisplayStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const originalPricingIfSale = {
  color: 'red' ,
  textDecorationLine: 'line-through'
}

export const Pricing = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    productStyles,
    getProductStyles,
    resetProductValue,
    featuredStyleIndex,
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id)
    return (() => {
      resetProductValue([])
    })
  }, [id])

  const originalPrice = productStyles.data ? productStyles.data.results[featuredStyleIndex].original_price : ''
  const salePrice = productStyles.data ? productStyles.data.results[featuredStyleIndex].sale_price : ''

  return (
    <div
      className="pricingDisplay"
      style={pricingDisplayStyle}>
      <div
        className="originalPrice"
        style={salePrice ? originalPricingIfSale : null}>
          {originalPrice}
      </div>
      <div
        className="salePrice">
          {salePrice}
      </div>
    </div>
  );

}