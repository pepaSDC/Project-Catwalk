import React from 'react';

export const Review = (props) => {
  return (
    <div>
      <div>
        <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
        <span>O User 12345, January 1, 2019</span>
      </div>
      <h2>Review title with word-break truncation to prevent wrapping onto the next...</h2>
      <p>...line if necessary</p>
      <p>Donut gummi bears gingerbread gummies chocolate. Ice cream apple pie tiramisu fruitcake chupa chups icing apple pie. Lemon drops cake pudding pudding.</p>
      <div>Helpful? Yes 10 | Report </div>
    </div>
  )
}