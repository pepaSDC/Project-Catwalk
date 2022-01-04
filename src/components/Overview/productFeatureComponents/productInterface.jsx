import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'

import { RatingsReviewsCategory } from './productInterfaceComponents/RatingsReviewsCategory.jsx'
import { ProductName } from './productInterfaceComponents/ProductName.jsx'
import { PriceAndStyle } from './productInterfaceComponents/PriceAndStyle.jsx'
import { StyleShowcase } from './productInterfaceComponents/StyleShowcase.jsx'
import { AddToCart } from './productInterfaceComponents/AddToCart.jsx'

import { RatingsAndReviewsProvider } from '../../../context/RatingsAndReviewsState.js';

const productInterfaceStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
}

export const ProductInterface = () => {
  const { currentProductId } = useContext(GlobalContext);

  return (
    <div
      style={productInterfaceStyle}
      className="productInterface">
        <RatingsAndReviewsProvider>
          <RatingsReviewsCategory />
        </RatingsAndReviewsProvider>
        <ProductName />
        <PriceAndStyle />
        <StyleShowcase />
        <AddToCart />
    </div>
  );
}