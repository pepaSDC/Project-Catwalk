/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Promise from 'bluebird';
import './styles.css';
import StarRating from '../RatingsAndReviews/StarRating.jsx';

const Outfit = (props) => {

  const [reviewRating, setReviewRating] = useState(0);

 //ratings function
 const getReviewMeta = (id) => {
  return axios({
    method: 'GET',
    url: `/reviews/meta/?product_id=${id}`
  })
}

useEffect(() =>{
  if(props.information.name !== "Add Current Item"){
    getReviewMeta(props.information[0].id)
  .then((results) => {
    let absolutetotal = 0;
    let totalratings = 0;
    for (var key in results.data.ratings) {
      totalratings += Number(results.data.ratings[key])
      absolutetotal += (Number(results.data.ratings[key]) * Number(key));
    }
    let average = Math.round((absolutetotal/totalratings) * 4) / 4;
     setReviewRating(average);
  })
  }
  if(props.information.name === "Add Current Item") {
    return null
  }

},[])
///////////////////

  return(
    <div>
      {props.information.name === "Add Current Item"

      ?<div className={`card ${props.cardStyle}`} onClick={() => props.addClickHandler()} >
        {console.log("this should render")}
        <img className="card-image" src={props.information.image} />
        <div>{props.information.name}</div>
      </div>

      :<div className={`card ${props.cardStyle}`} onMouseDown={props.handleMouseDown}>
        <button className="compare-btn" onClick={() => props.deleteClickHandler(props.information[0].id)}>X</button>
        <Link to={`/items/${props.information[0].id}`}><img className="card-image" src={props.information[1]}/></Link>
        <div>{props.information[0].category}</div>
        <div>{props.information[0].name}</div>
        <StarRating rating={reviewRating}/>
      </div>
    }
    </div>
  )
}

export default Outfit;