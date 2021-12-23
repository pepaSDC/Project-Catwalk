import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js'
import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'

export const ProductDetail = () => {
  const { getAllProducts, allProducts } = useContext(GlobalContext);
  console.log('all products from pro det:::',allProducts);

  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <div>
      <div className="app">Hello React pro detail</div>
     <RelatedProducts/>
    </div>
  );
}