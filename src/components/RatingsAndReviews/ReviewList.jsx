import React, { useState } from 'react';
import {SortOptions} from './SortOptions.jsx';
import {Review} from './Review.jsx';
import {NewReview} from './NewReview.jsx';

export const ReviewList = (props) => {
  const [tiles, setTiles] = useState(2);
  const [modal, setModal] = useState(false);
  const reviews = props.state ? props.state.slice(0,tiles) : [];

  const clickHandler = (event) => {
    setTiles(tiles + 2);
  }

  const addReview = (event) => {
    setModal(true);
  }
  return (
    <div style={{width: '66%', height: '90vh', overflowY: 'auto', overflowX: 'hidden'}}>
      <SortOptions number={props.state.length}/>
      {reviews.map((review) => <Review key={review.review_id} review={review}/> )}
      <div style={{margin: '10px', padding: '10px'}}>
        {props.state.length > reviews.length ? <button onClick={clickHandler}>More Reviews</button> : null}
        <button onClick={addReview}>Add A Review +</button>
        {modal ? <NewReview setModal={setModal} meta={props.meta}/> : null}
      </div>
    </div>
  );
}