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
  if (props.information[1] === null) {
    props.information[1] = "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  }
  return(
   <div className={`container-card${props.itemNum}`}>
    <img className="card-image" src={props.information[1]}/>
    <div>{props.information[0].category}</div>
    <div>{props.information[0].name}</div>
    <div>reviews ******</div>
  </div>
  )

}

export default RelatedProduct;