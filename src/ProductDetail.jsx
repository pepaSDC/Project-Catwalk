import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js';
import {  useParams, useLocation } from 'react-router-dom';

<<<<<<< HEAD
import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'
import { RatingsAndReviews } from './components/RatingsAndReviews/RatingsAndReviews.jsx'

import { Overview } from './components/Overview/Overview.jsx'
import { OverviewProvider } from './context/OverviewState.js';


import { RatingsAndReviewsProvider } from './context/RatingsAndReviewsState.js';
=======
import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx';
import { RatingsAndReviews } from './components/RatingsAndReviews/RatingsAndReviews.jsx';
import { Overview } from './components/Overview/Overview.jsx';
>>>>>>> dc8d816 (added other components)



const ProductDetail = () => {
  let { id } = useParams();

  const { updateCurrentProductId, currentProductId, getAllProducts } = useContext(GlobalContext);

  useEffect(() =>{
    updateCurrentProductId(id);
    getAllProducts();
  },[id])

  return (
    <div>
      <OverviewProvider>
        <Overview />
      </OverviewProvider>

      <RelatedProducts />
<<<<<<< HEAD
      <RatingsAndReviewsProvider>
        <RatingsAndReviews />
      </RatingsAndReviewsProvider>

=======
      <RatingsAndReviews />
      <
>>>>>>> dc8d816 (added other components)
    </div>
  );
}
export default ProductDetail;