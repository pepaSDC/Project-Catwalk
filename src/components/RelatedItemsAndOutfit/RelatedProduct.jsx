/* eslint-disable react/prop-types */
import React from 'react';



//photos link
//information[1]

//category
//information[0].category

//name
//information[0].name

//price
//information[0].default_price

//review rating
//information[0].name

const RelatedProduct = (props) => {
  return(
   <div>
    <div>Individual card</div>
    <div>{props.information[1]}</div>
    <div>{props.information[0].category}</div>
    <div>{props.information[0].name}</div>
    <div>reviews</div>
  </div>
  )

}

export default RelatedProduct;