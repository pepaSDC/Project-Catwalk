/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { SelectableStars } from './SelectableStars.jsx';
import { CharacteristicsForm } from './CharacteristicsForm.jsx';
import { GlobalContext } from '../../context/GlobalState.js';
import axios from 'axios';

export const NewReview = (props) => {

  const {currentProductId} = useContext(GlobalContext);

  const [recommend, useRecommend] = useState('Yes');
  const [summary, useSummary] = useState('');
  const [reviewBody, useReviewBody] = useState('');
  const [nickname, useNickname] = useState('');
  const [email, useEmail] = useState('');
  const [file, useFile] = useState([]);
  const [rating, useRating] = useState(null);

  const [nicknameFocus, useNicknameFocus] = useState(false);
  const [emailFocus, useEmailFocus] = useState(false);

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
    backgroundColor: 'white',
    margin: '2% auto',
    padding: '30px 100px',
    paddingBottom: '50px',
    border: '1px solid black',
    maxWidth: '800px',
    width: '90vh',
    borderRadius: '5px',
    maxHeight: '90vh',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    zIndex: '100'
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
    axios.post('http://localhost:3000/reviews', body)
      .then(()=> {
        props.useNewReview(body);
        props.setModal(false);
      })
      .catch(err => console.log(err))
  }

  let widget = window.cloudinary.createUploadWidget(
    {
    cloudName: 'dkx7ghwza',
    uploadPreset:'rwqy5jkq'
    },
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        if (result.event === 'success') {
          widget.close();
          useFile([...file, result.info.secure_url])
        }
      }
    })

  const showWidget = (widget) => {
    widget.open();
  }

  return (
    <div style={styleModal}>
      <div style={styleForm}>
        <div style={{paddingRight: '100%'}} onClick={clickHandler}>&times;</div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <h4 style={{margin: '0', padding: '0 auto'}}>Write Your Review</h4>
      </div>
      <form onSubmit={submitHandler}>
        <SelectableStars useRating={useRating}/>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <p style={{margin: '5px 0 '}}>Do you recommend this product?</p>
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
          <div>Characteristics:</div>
          {Object.keys(props.meta.characteristics).map( item => {
            return <CharacteristicsForm char={item} id={item} key={props.meta.characteristics[item].id}/>
            }
          )}
        </div>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px'}}>
          <label>Review Summary: </label>
          <input style={{width: '50%', border: 'none', borderBottom: '1px solid lightgray'}} onChange={(e) => useSummary(e.target.value)}type="text" placeholder="Example: Best purchase ever!" maxLength="60"></input>
        </div>
        <div style={{padding: '10px'}}>
          <label >Review Body:</label>
          <textarea style={{width: '100%', border: '1px solid lightgray'}} onChange={(e) => useReviewBody(e.target.value)}type="textarea" placeholder="Why did you like the product or not?" maxLength="1000" minLength="50" required></textarea>
          <div style={{float: 'right', fontSize: '12px'}}>{reviewBody.length >= 50 ? 'Minimum Reached' : `Minimum required characters left: ${50 - reviewBody.length}`} </div>
        </div>
        <div style={{borderBottom: '1px solid lightgray', padding: '10px', height: '100px'}}>
          {file.length < 5 ? <button onClick={()=>showWidget(widget)}>Upload Photo</button> : null}
          <div>
            {file.length !== 0 ? file.map(item => <img style={{height: '50px', margin: '10px'}} src={item} key={item}></img>) : null}
          </div>
        </div>
        <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', height: '50px'}}>
          <div style={{width: '50%'}}>
            <label htmlFor="nickname">Nickname: </label>
            <input onFocus={() => useNicknameFocus(true)} onBlur={() => useNicknameFocus(false)} style={{width: 'auto'}} onChange={(e) => useNickname(e.target.value)} id="nickname" type="textarea" placeholder="Example: jackson11!" maxLength="60" required></input>
            <div style={{fontSize: '12px'}}>{nicknameFocus ? ' For privacy reasons, do not use your full name or email address': ''}</div>
          </div>
          <div style={{width: '50%'}}>
            <label htmlFor="email">  Email: </label>
            <input onFocus={() => useEmailFocus(true)} onBlur={() => useEmailFocus(false)} style={{width:'202px'}} onChange={(e) => useEmail(e.target.value)} type="email" placeholder="Example: jackson11@email.com" required></input>
            <div style={{fontSize: '12px'}}>{emailFocus ? ' For authentication reasons, you will not be emailed': ''}</div>
          </div>
        </div>
        <div style={{padding: '10px'}}>
          <input type="submit" value="Submit Review"></input>
        </div>
      </form>
      </div>
    </div>
  )
}