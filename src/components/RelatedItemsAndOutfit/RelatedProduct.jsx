/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import Promise from 'bluebird';
import { Link } from 'react-router-dom';
import ComparingModal from './ComparingModal.jsx';
import './styles.css';
import axios from 'axios';
import StarRating from '../RatingsAndReviews/StarRating.jsx';


const RelatedProduct = (props) => {

  const [modalToggle, setModalToggle] = useState(false);

  // const { getAverageReview } = useContext(GlobalContext);

  const [reviewRating, setReviewRating] = useState(0);

  //sets a default image
  if (props.information[1] === null) {
    props.information[1] = "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
  }
  let oProductFeatures = [];
  let rProductFeatures = [];
  for(let i = 0; i < props.information[0].features.length; i++) {
    let curFeat = props.information[0].features[i]
    if(typeof curFeat.value === 'string' && typeof curFeat.feature === 'string') {
      oProductFeatures.push(curFeat.value+' '+curFeat.feature);
    }
  }
  for(let i = 0; i < props.currentProductInfo.length; i++) {
    let curFeat = props.currentProductInfo[i]
    if(typeof curFeat.value === 'string' && typeof curFeat.feature === 'string') {
      rProductFeatures.push(curFeat.value+' '+curFeat.feature);
    }
  }
  let allList = oProductFeatures.concat(rProductFeatures);
  let comparingList = allList.filter((item, pos) => {
    return allList.indexOf(item) == pos;
  });
  for(let i = 0; i < oProductFeatures.length; i++) {

  }

  //ratings function
  const getReviewMeta = (id) => {
    return axios({
      method: 'GET',
      url: `http://localhost:3000/reviews/meta/?product_id=${id}`
    })
  }

  useEffect(() =>{
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
  },[])
  ///////////////////

  return(
   <div className={`card ${props.cardStyle}`} onMouseDown={props.handleMouseDown}>

     <button className="compare-btn" onClick={() => modalToggle === false ? setModalToggle(true) : setModalToggle(false) }>&#9734;</button>
     <Link to={`/items/${props.information[0].id}`}><img className="card-image" src={props.information[1]}/></Link>
    <div style={{padding:'0 5px'}}>{props.information[0].category}</div>
    <div style={{padding:'0 5px'}}> {props.information[0].name}</div>
    <StarRating rating={reviewRating}/>

    {modalToggle
        ?<ComparingModal
          className=""
          comparingList={comparingList}
          oProductFeatures={oProductFeatures}
          rProductFeatures={rProductFeatures}
          rName={props.information[0].name}
          currentProductName={props.currentProductName}
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
        />
        :<div></div>
      }
  </div>
  )
}

export default RelatedProduct;