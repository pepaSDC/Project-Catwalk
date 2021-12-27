import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js'
import {  useParams, useLocation } from 'react-router-dom';

import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'
import { Overview } from './components/Overview/overview.jsx'


const ProductDetail = () => {
  let { id } = useParams();
  console.log('product id from url prams', id)
  const { updateCurrentProductId, currentProductId } = useContext(GlobalContext);

  useEffect(() =>{
    updateCurrentProductId(id);
    console.log('===> get into the useEffect to update product id')
  },[id])

  console.log('current product id at global state',currentProductId);



  return (
    <div>
<<<<<<< HEAD
      <div className="app">Hello from product detail</div>
     <RelatedProducts />
=======
      {/* <div className="app">Hello from product detail</div> */}
      <div>
        <Overview />
      </div>
      <div>
        <RelatedProducts/>
      </div>
>>>>>>> c12af21 (added some components to overview)
    </div>
  );
}
export default ProductDetail;