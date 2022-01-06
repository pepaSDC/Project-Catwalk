/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'
import axios from 'axios'

export const SizeAndQuantity = (props) => {
  const { currentProductId } = useContext(GlobalContext);
  const { updateSelectedItemSku, selectedItemSkuNumber } = useContext(OverviewContext);
  const [quantityOfItem, setQuantity] = useState(0);

  const onSizeSelect = (event) => {
    event.preventDefault();
    updateSelectedItemSku(event.target.value);
  }

  const onQuantitySelect = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  }

  const handleAddToCart = (event) => {
    event.preventDefault();
    let purchase = {
      sku_id: selectedItemSkuNumber,
      count: quantityOfItem
    }
    axios.post('/cart/', purchase)
      .then ((response => {
        console.log(response);
      }))
      .catch ((error => {
        console.log(error)
      }))
  }

  return (
    <div
      className="addToCartContainer">
      <div
        className="sizeAndQuantityDropdowns">
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
          onChange={onQuantitySelect}
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
      <div
        className="addToCartButton">
        <button
          onClick={handleAddToCart}
          type="submit"
          disabled={quantityOfItem === 0}
          >Add To Cart
        </button>
      </div>
    </div>
  )
}
