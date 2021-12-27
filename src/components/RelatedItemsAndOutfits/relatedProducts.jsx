
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState.js'

export const RelatedProducts = () => {
  const { currentProductId } = useContext(GlobalContext);
  console.log('current p id from related products', currentProductId)
  return (
    <div>
      <div className="app">Hello From RelatedProducts</div>
    </div>
  );
}