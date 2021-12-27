import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'

const priceAndStyleSelectorStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const styleSelectorStyle = {
  display: 'flex',
  flexDirection: 'row'
}


export const PriceAndStyle = () => {
  // const { getAllProducts, allProducts } = useContext(GlobalContext);
  // useEffect(() => {
  //   getAllProducts();
  // }, []);
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