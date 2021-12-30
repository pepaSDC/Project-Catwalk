import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { OverviewContext } from '../../../../context/OverviewState.js'

export const SizeAndQuantity = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles, getProductInfo, productInfo, featuredStyleIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id)
  }, [id])

  let skuObject = productStyles.data ? productStyles.data.results[featuredStyleIndex].skus : {}

  console.log('line 18 in SizeAndQuantity: ', skuObject);
  return (
    <div>
      SizeAndQuantity
    </div>
  )
}
