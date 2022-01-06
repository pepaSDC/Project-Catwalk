/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import Promise from 'bluebird';
import { Link } from 'react-router-dom';
import ComparingModal from './ComparingModal.jsx';
import './styles.css';


const RelatedProduct = (props) => {

  const [modalToggle, setModalToggle] = useState(false);

  const { getAverageReview } = useContext(GlobalContext);

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
  useEffect(() =>{
    getAverageReview(props.information[0].id)
    .then(rating => {
      setReviewRating(rating);
    })
  },[])

  return(
   <div className={`card ${props.cardStyle}`} onMouseDown={props.handleMouseDown}>
     <button className="compare-btn" onClick={() => modalToggle === false ? setModalToggle(true) : setModalToggle(false) }>&#9734;</button>
     <Link to={`/items/${props.information[0].id}`}><img className="card-image" src={props.information[1]}/></Link>
    <div>{props.information[0].category}</div>
    <div>{props.information[0].name}</div>
    <div>{reviewRating}</div>

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