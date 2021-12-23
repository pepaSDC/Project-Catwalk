import React, {useState, useEffect, useContext} from 'react';
import { GlobalContext } from './context/GlobalState.js'
import { RelatedProducts } from './components/RelatedItemsAndOutfit/RelatedProducts.jsx'
import ProductDetail  from './ProductDetail.jsx'
import { BrowserRouter as Router, Routes,  Route,  useParams, Navigate } from 'react-router-dom';

const Routing = () => {
  const { getAllProducts, allProducts } = useContext(GlobalContext);
  // console.log('all products from pro det:::',allProducts);

  // useEffect(() => {
  //   getAllProducts();
  // }, [])

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to="/item/2"/>}/>
          <Route path="/item/:id" element={<ProductDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
};
export default Routing;

//https://v5.reactrouter.com/core/api/Redirect