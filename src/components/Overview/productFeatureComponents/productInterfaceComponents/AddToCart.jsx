import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { SizeAndQuantity } from './SizeAndQuantity.jsx'

let addToCartStyle = {
  display: 'flex',
  flexDirection: 'column'
}

let sizeAndQuantityDropdownStyles = {
  display: 'flex',
  flexDirection: 'row'
}

let addToBagOrShareStyle = {
  display: 'flex',
  flexDirection: 'row'
}

let addToBagButtonStyle = {
  display: 'flex',
  flexGrow: 1
}

let shareButtonStyle = {
  display: 'flex',
  flexGrow: 1
}

export const AddToCart = () => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      style={addToCartStyle}
      className="addToCart">
        {/* <div
          className="cartDropdowns"
          style={sizeAndQuantityDropdownStyles}>
            <div>
              Select Size
            </div>
            <div>
              Quantity
            </div>
        </div> */}
        <SizeAndQuantity />
        <div
          className="addToBagOrShare"
          style={addToBagOrShareStyle}>
            <div
              className="addToBag"
              style={addToBagButtonStyle}>
              AddToBag
            </div>
            <div
              style={shareButtonStyle}>
              Share
            </div>
        </div>
    </div>
  );
}