import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

export const ProductName = () => {
  const { currentProductId } = useContext(GlobalContext);
  const { getProductInfo, productInfo } = useContext(OverviewContext);
  let id = currentProductId;

  useEffect(() => {
    getProductInfo(id)
  }, [id])

  const productNameStyling = {
    fontSize: '30px'
  }

  const productName = productInfo.data ? productInfo.data.name: ''

  return (
    <div
      style={productNameStyling}
      className="productName">
        {productName}
    </div>
  );
}