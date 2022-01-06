/* eslint-disable react/prop-types */
import React, {useState} from 'react';

export const PictureModal = (props) => {
  const styleModal = {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'fixed',
    zIndex: '5',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }
  const stylePicture = {
    margin: '15vh auto',
    height: '70vh',
    textAlign: 'center'
  }
  return(
    <div onClick={ ()=>props.useModal(null) } style={styleModal}>
      <img src={props.image} style={stylePicture}></img>
    </div>
  );
}