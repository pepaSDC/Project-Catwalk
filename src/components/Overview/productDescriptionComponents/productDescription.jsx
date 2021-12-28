import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'

export const ProductDescription = () => {
  const { currentProductId } = useContext(GlobalContext);
  console.log('productDescription: ', currentProductId);
  return (
    <div>
      Product Description
    </div>
  );
}