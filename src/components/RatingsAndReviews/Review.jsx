import React, {useState} from 'react';
import { PrettyDate } from './PrettyDate.jsx';
import { StarRating } from './StarRating.jsx';
import axios from 'axios';

export const Review = ({ review }) => {
  const style = {
    margin: '10px',
    padding: '10px',
    borderBottom: '1px solid black'
  }

  const anchorstyle = {
    borderBottom: '1px solid gray'
  }

  const [helpful, setHelpful] = useState( () => {
    return ({
      clicked: false,
      amount: review.helpfulness
    })
  })

  const clickHandler = (event) => {
    if (!helpful.clicked) {
      console.log('axios is being sent');
      axios.put(`http://localhost:3000/reviews/${review.review_id}/helpful/?review_id=${review.review_id}`, '')
      .then( (data) => {
        setHelpful( (currState) => {
          return {
            clicked: true,
            amount: currState.amount + 1
          }
        })
      })
    }

  }
  return (
    <div className="reviewTile" style={style}>
      <div className="reviewHeader" style={{display: 'flex', justifyContent: 'space-between'}}>
        <span><StarRating rating={review.rating}/></span>
        <div>
          <span>{review.reviewer_name.length === 0 ? "Anonymous" : review.reviewer_name }</span>
          <PrettyDate date={review.date}/>
        </div>
      </div>
      <h2>{review.summary}</h2>
      <p>{review.body}</p>
      {review.photos.length > 0 ? review.photos.map((photo) => <img src={photo.url} key={photo.id} style={{width: '50px'}}></img>) : null }
      {review.recommend ? <div>&#10003; I recommended this product </div> : null}
      {review.response ? <div>Response from seller: {review.response}</div> : null}
      <span>Was this review helpful? </span>
      <a style={anchorstyle} onClick={clickHandler}>Yes ({helpful.amount})</a>
       <a> Report </a>
    </div>
  )
}

