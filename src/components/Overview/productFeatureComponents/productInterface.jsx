import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState.js'
import { OverviewContext } from '../../../context/OverviewState.js'

import { RatingsReviewsCategory } from './productInterfaceComponents/RatingsReviewsCategory.jsx'
import { ProductName } from './productInterfaceComponents/ProductName.jsx'
import { PriceAndStyle } from './productInterfaceComponents/PriceAndStyle.jsx'
import { StyleShowcase } from './productInterfaceComponents/StyleShowcase.jsx'
import { AddToCart } from './productInterfaceComponents/AddToCart.jsx'

import { RatingsAndReviewsProvider } from '../../../context/RatingsAndReviewsState.js';

const productInterfaceStyle = {
  display: 'flex',
  flexDirection: 'column',
}

export const ProductInterface = () => {
  const { currentProductId } = useContext(GlobalContext);
  const { currentView } = useContext(OverviewContext);

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