/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

const style = {
  height: '65px',
  width: '65px'
};

const UploadPhotos = (props) => {

  return (
    <div className='upload'>
      <label htmlFor='uploadPhotos' className='photoLabel'>
        <input id='uploadPhotos' type='file' multiple accept='image/*' onChange={props.task} style={{display: 'none'}}/>
        Select Images
      </label>
      <div>
        {props.previews.length > 0
          ? props.previews.map(photo => { return <img style={style} className='thumbnail' src={photo}></img>})
          : <span>No images selected</span>
        }
      </div>
    </div>
  );
};

export default UploadPhotos;