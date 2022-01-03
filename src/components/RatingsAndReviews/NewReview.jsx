import React, { useState, useContext } from 'react';
import { SelectableStars } from './SelectableStars.jsx';
import { CharacteristicsForm } from './CharacteristicsForm.jsx';
import { GlobalContext } from '../../context/GlobalState.js';

export const NewReview = (props) => {

  const {currentProductId} = useContext(GlobalContext);

  const [recommend, useRecommend] = useState('Yes');
  const [summary, useSummary] = useState('');
  const [reviewBody, useReviewBody] = useState('');
  const [nickname, useNickname] = useState('');
  const [email, useEmail] = useState('');
  const [file, useFile] = useState([]);
  const [rating, useRating] = useState(null);

  const styleModal = {
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }

  const styleForm = {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '10% auto',
    padding: '30px 50px',
    border: '1px solid #888',
    width: '70%',
    borderRadius: '5px'
  }

  const clickHandler = (event) => {
    props.setModal(false);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let characteristicRatings = {};
    let x = Object.keys(props.meta.characteristics).forEach(item=>{
        for (var i = 0; i < 5; i++) {
          if (document.getElementsByClassName(item)[i].checked) {
            characteristicRatings[props.meta.characteristics[item].id] = Number(document.getElementsByClassName(item)[i].value);
          }
        }
      }
    )

    let body = {
      product_id: Number(currentProductId),
      rating: rating,
      summary: summary,
      body: reviewBody,
      recommend: recommend === "Yes" ? true : false,
      name: nickname,
      email: email,
      photos: file,
      characteristics: characteristicRatings
    }
    console.log(body);
  }

  return (
    <div style={styleModal}>
      <div style={styleForm}>
      <span onClick={clickHandler}>&times;</span>
      <h2 style={{margin: '5px'}}>Add Your Review</h2>
      <form onSubmit={submitHandler}>
        <SelectableStars useRating={useRating}/>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <p>Do you recommend this product?</p>
          <label htmlFor="recommendYes">Yes</label>
          <input
            onChange={(event)=>useRecommend(event.target.value)}
            type="radio"
            name="recommend"
            id="recommendYes"
            value="Yes" defaultChecked>
          </input>
          <label htmlFor="recommendNo">No</label>
          <input
            onChange={(event)=>useRecommend(event.target.value)}type="radio" name="recommend" id="recommendNo" value="No">

          </input>
        </div>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <p>Characteristics Ratings</p>
          {Object.keys(props.meta.characteristics).map( item => {
            return <CharacteristicsForm char={item} id={item} key={props.meta.characteristics[item].id}/>
            }
          )}
        </div>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <label>Review Summary: </label>
          <input onChange={(e) => useSummary(e.target.value)}type="text" placeholder="Example: Best purchase ever!"></input>
        </div>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <label>Review Body: </label>
          <input onChange={(e) => useReviewBody(e.target.value)}type="textarea" placeholder="Why did you like the product or not?" required></input>
        </div>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <input onChange={(e)=>console.log(document.getElementById('myFile').files)} type="file" id="myFile" name="filename"></input>
          {file !== '' ? <img style={{width: '50px'}} src={file}></img> : null}
        </div>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <label htmlFor="nickname">Nickname: </label>
          <input style={{width: 'auto'}} onChange={(e) => useNickname(e.target.value)} id="nickname" type="textarea" required></input>
          <label htmlFor="email">  Email: </label>
          <input onChange={(e) => useEmail(e.target.value)} type="email" required></input>
        </div>
        <div style={{padding: '10px'}}>
          <input type="submit" value="Submit!!"></input>
        </div>
      </form>

      </div>
    </div>
  )
}