/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';



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
    props.information[1] = "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
  }
  //props.information[0].id
  return(
   <div className={`card ${props.cardStyle}`} onMouseDown={props.handleMouseDown}>
     <Link to={`/items/${props.information[0].id}`}><img className="card-image" src={props.information[1]}/></Link>

    <div>{props.information[0].category}</div>
    <div>{props.information[0].name}</div>
    <div>reviews ******</div>
  </div>
  )

}

export default RelatedProduct;