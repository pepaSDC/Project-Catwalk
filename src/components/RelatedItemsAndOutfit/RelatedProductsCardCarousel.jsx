/* eslint-disable react/prop-types */
import React from 'react';
import RelatedProduct from './RelatedProduct.jsx';


const RelatedProductsCardCarousel = (props) => (
  <div>
      <div>list:::</div>
    <div>
      {props.relatedProductArray.map((ele, idx) => <RelatedProduct information={ele} key={idx}/>)}
    </div>
  </div>
)

export default RelatedProductsCardCarousel;