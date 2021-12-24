import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js'
import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'
import { Overview } from './components/Overview/overview.jsx'

export const ProductDetail = () => {

  return (
    <div>
      {/* <div className="app">Hello from product detail</div> */}
      <div>
        <Overview />
      </div>
      <div>
        <RelatedProducts/>
      </div>
    </div>
  );
}