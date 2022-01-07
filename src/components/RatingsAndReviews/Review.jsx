/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import { PrettyDate } from './PrettyDate.jsx';
import { StarRating } from './StarRating.jsx';
import { PictureModal } from './PictureModal.jsx';
import axios from 'axios';

export const Review = ({ review }) => {
  const MAX_LENGTH = 250;

  const style = {
    margin: '10px',
    padding: '10px',
    borderBottom: '1px solid black'
  }

  const anchorstyle = {
    textDecoration: 'underline'
  }
  const [modal, useModal] = useState(null);
  const [helpful, setHelpful] = useState( () => {
    return ({
      clicked: false,
      amount: review.helpfulness
    })
  })
  const [showMore, useShowMore] = useState(false);

  const [report, setReport] = useState(false);

  const clickHandlerHelp = (event) => {
    if (!helpful.clicked) {
      axios.put(`/reviews/${review.review_id}/helpful/?review_id=${review.review_id}`, '')
      .then( (data) => {
        setHelpful( (currState) => {
          return {
            clicked: true,
            amount: currState.amount + 1
          }
        })
      })
      .catch(err => console.log(err));
    }
  }

  const clickHandlerReport = (event) => {
    axios.put(`/reviews/${review.review_id}/report/?review_id=${review.review_id}`)
      .then ( (data) => {
        setReport(true);
      })
  }
  return ( !report ?
    <div className="reviewTile" style={style}>
      <div className="reviewHeader" style={{display: 'flex', justifyContent: 'space-between'}}>
        <span><StarRating rating={review.rating}/></span>
        <div>
          <span style={{padding: '0 10px', fontWeight: 'bold'}}>{review.reviewer_name.length === 0 ? "Anonymous" : review.reviewer_name }</span>
          <PrettyDate date={review.date}/>
        </div>
      </div>
      <h2 style={{margin:'10px 0'}}>{review.summary}</h2>
      {review.body.length > MAX_LENGTH && !showMore
        ? <p>{`${review.body.substring(0, MAX_LENGTH)}...`} <a onClick={()=>useShowMore(true)} style={{fontSize:'12px', fontWeight: 'bold'}}>Show More</a> </p>
        : <p>{review.body}</p>
      }
      {review.photos.length > 0
        ? review.photos.map((photo) => {
          return(
            <span key={photo.id}>
              <img onClick={ ()=>useModal(photo.url) } src={photo.url} style={{maxWidth: '50px', maxHeight: '100px', width: '100%', height: '100%', objectFit:'cover' }}></img>
              { modal ? <PictureModal useModal={useModal} image={modal}/> : null }
            </span>

          )
      })
        : null }
      {review.recommend ? <div style={{margin: '5px'}}>&#10003; I recommended this product </div> : null}
      {review.response ? <div>Response from seller: {review.response}</div> : null}
      <div style={{fontSize: '12px', marginTop: '15px'}}>
        <span>Was this review helpful? </span>
        <a style={anchorstyle} onClick={ clickHandlerHelp }>Yes</a>
        <span style={{padding: '0 2px'}}>({helpful.amount})</span>
        <span>|</span>
        <a style={anchorstyle} onClick={ clickHandlerReport }> Report </a>
      </div>
    </div>
    : null
  )
}

