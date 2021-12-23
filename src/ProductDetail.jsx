import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js'
import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'

export const ProductDetail = () => {

  return (
    <div>
      <div className="app">Hello from product detail</div>
     <RelatedProducts/>
    </div>
  );
}