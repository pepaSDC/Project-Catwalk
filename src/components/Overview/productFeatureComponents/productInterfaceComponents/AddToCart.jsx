import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'

const addToCartStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const sizeAndQuantityDropdownStyles = {
  display: 'flex',
  flexDirection: 'row'
}

const addToBagOrShareStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const addToBagButtonStyle = {
  display: 'flex',
  flexGrow: 2
}

const shareButtonStyle = {
  display: 'flex',
  flexGrow: 1
}

export const AddToCart = () => {
  // const { getAllProducts, allProducts } = useContext(GlobalContext);
  // useEffect(() => {getAllProducts()}, []);
  return (
    <div
      style={addToCartStyle}
      className="addToCart">
        <div
          className="cartDropdowns"
          style={sizeAndQuantityDropdownStyles}>
            <div>
              Select Size
            </div>
            <div>
              Quantity
            </div>
        </div>
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