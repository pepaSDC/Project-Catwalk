import React from 'react';
import { PrettyDate } from './PrettyDate.jsx';

export const Review = ({ review }) => {
  return (
    <div className="reviewTile">
      <div className="reviewHeader" style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>&#9734;&#9734;&#9734;&#9734;&#9734; stars component</span>
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
      <div>Was this review helpful? Yes ({review.helpfulness}) | Report </div>
    </div>
  )
}

