/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Outfit = (props) => {

  return(
    <div className={`card ${props.cardStyle}`} onMouseDown={props.handleMouseDown}>
     <button className="compare-btn" onClick={() => props.addOutfitItem }>&#9734;</button>
     <Link to={`/items/${props.information[0].id}`}><img className="card-image" src={props.information[1]}/></Link>
    <div>{props.information[0].category}</div>
    <div>{props.information[0].name}</div>
  </div>
  )
}

export default Outfit;