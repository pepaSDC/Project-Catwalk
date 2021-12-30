/* eslint-disable react/prop-types */
import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import './styles.css';



const RelatedProductsCardCarousel = (props) => (
  <div className={'container'}>
    <button className="arrowLeft"></button>
      {props.relatedProductArray.map((ele, idx) => <RelatedProduct information={ele} key={idx} itemNum={idx}/>)}
    <button className="arrowRight"></button>
  </div>
)

export default RelatedProductsCardCarousel;