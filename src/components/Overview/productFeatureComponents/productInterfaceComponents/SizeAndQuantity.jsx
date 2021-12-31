/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

export const SizeAndQuantity = (props) => {
  // const { currentProductId } = useContext(GlobalContext);
  // const {
  //   getProductStyles, productStyles,
  //   getProductInfo, productInfo,
  //   featuredStyleIndex, updateSelectedItemSku,
  // } = useContext(OverviewContext);

  const onSizeSelect = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    updateSelectedItemSku(event.target.value);
  }

  // const itemQuantities = props.skuObject[selectedItemSkuNumber] ? props.skuObject[selectedItemSkuNumber].quantity : 0
  // console.log('line 22 in sizeAndQuantity: ', props.skuObject[selectedItemSkuNumber]);
  // console.log('line 23 in sizeAndQuantity: ', itemQuantities);
  // const itemQuantitiesArray = Array.from(Array(itemQuantities).keys());

  // console.log('butt', props.skuObject[selectedItemSkuNumber]);

  // const itemQuantitiesArray = props.skuObject[selectedItemSkuNumber] ? Array.from({length: itemQuantities}, (value, key) => key + 1) : []


  return (
    <div>
      <select
        onChange={onSizeSelect}
        className="sizeDropdown"
        name="Select a Size">
          <option value="">Select a Size</option>
          {props.skuArray && props.skuArray.map((key, index) => (
            <option
              key={key}
              index={index}
              value={key}>
              {props.skuObject[key].size}
            </option>
          ))}
      </select>
      <select
        className="quantityDropdown"
        name="Quantity">
          <option value="">Select a Quantity</option>
            {props.itemQuantities && props.itemQuantities.map((key, index) => (
              <option
                key={key}
                index={index}
                value={index}>
                  {index}
                </option>
            ))}
      </select>
    </div>
  )
}
