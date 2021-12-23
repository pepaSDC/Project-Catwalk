import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js'
import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'
import { ProductDetail } from './ProductDetail.jsx'

export const Routes = () => {
  const { getAllProducts, allProducts } = useContext(GlobalContext);
  console.log('all products from pro det:::',allProducts);

  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <div>
      <div>Hello from routes</div>
      <ProductDetail/>
    </div>
  );
}


//https://v5.reactrouter.com/core/api/Redirect