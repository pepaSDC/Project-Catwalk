import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'


import { RatingsReviewsCategory } from './productInterfaceComponents/RatingsReviewsCategory.jsx'
import { ProductName } from './productInterfaceComponents/ProductName.jsx'
import { PriceAndStyle } from './productInterfaceComponents/PriceAndStyle.jsx'
import { StyleShowcase } from './productInterfaceComponents/StyleShowcase.jsx'
import { AddToCart } from './productInterfaceComponents/AddToCart.jsx'

const productInterfaceStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 4
}

export const ProductInterface = () => {
  // const { getAllProducts, allProducts } = useContext(GlobalContext);
  // useEffect(() => {getAllProducts()}, []);
  return (
    <div
      style={productInterfaceStyle}
      className="productInterface">
        <RatingsReviewsCategory />
        <ProductName />
        <PriceAndStyle />
        <StyleShowcase />
        <AddToCart />
    </div>
  );
}