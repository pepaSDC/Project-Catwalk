import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js'
import {  useParams, useLocation } from 'react-router-dom';

import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'
import { RatingsAndReviews } from './components/RatingsAndReviews/RatingsAndReviews.jsx'
import { Overview } from './components/Overview/Overview.jsx'



const ProductDetail = () => {
  let { id } = useParams();

  const { updateCurrentProductId, currentProductId, getAllProducts } = useContext(GlobalContext);

  useEffect(() =>{
    updateCurrentProductId(id);
    getAllProducts();
  },[id])

  return (
    <div>
      <div className="app">Hello from product detail</div>

      <Overview />
      <RelatedProducts />
      <RatingsAndReviews />
    </div>
  );
}
export default ProductDetail;