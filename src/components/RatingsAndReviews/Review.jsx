import React from 'react';
import { PrettyDate } from './PrettyDate.jsx';

export const Review = ({ review }) => {
  return (
    <div>
      <div className="reviewHeader" style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>&#9734;&#9734;&#9734;&#9734;&#9734; stars component</span>
        <div>
          <span>{review.reviewer_name.length === 0 ? "Anonymous" : review.reviewer_name }</span>
          <PrettyDate date={review.date}/>
        </div>
      </div>
      <h2>Review title with word-break truncation to prevent wrapping onto the next...</h2>
      <p>...line if necessary</p>
      <p>Donut gummi bears gingerbread gummies chocolate. Ice cream apple pie tiramisu fruitcake chupa chups icing apple pie. Lemon drops cake pudding pudding.</p>
      <div>Helpful? Yes 10 | Report </div>
    </div>
  )
}