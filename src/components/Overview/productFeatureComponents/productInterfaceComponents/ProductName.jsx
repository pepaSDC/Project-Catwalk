import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'

export const ProductName = () => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      className="productName">
        Expanded? Product Name
    </div>
  );
}