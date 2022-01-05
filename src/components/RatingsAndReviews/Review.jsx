import React, {useState} from 'react';
import { PrettyDate } from './PrettyDate.jsx';
import { StarRating } from './StarRating.jsx';
import { PictureModal } from './PictureModal.jsx';
import axios from 'axios';

export const Review = ({ review }) => {
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

  const [report, setReport] = useState(false);

  const clickHandlerHelp = (event) => {
    if (!helpful.clicked) {
      axios.put(`http://localhost:3000/reviews/${review.review_id}/helpful/?review_id=${review.review_id}`, '')
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
    axios.put(`http://localhost:3000/reviews/${review.review_id}/report/?review_id=${review.review_id}`)
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
      <h2>{review.summary}</h2>
      <p>{review.body}</p>
      {review.photos.length > 0
        ? review.photos.map((photo) => {
          return(
            <span key={photo.id}>
              <img onClick={ ()=>useModal(photo.url) } src={photo.url} style={{width: '50px'}}></img>
              { modal ? <PictureModal useModal={useModal} image={modal}/> : null }
            </span>

          )
      })
        : null }
      {review.recommend ? <div>&#10003; I recommended this product </div> : null}
      {review.response ? <div>Response from seller: {review.response}</div> : null}
      <div>
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

