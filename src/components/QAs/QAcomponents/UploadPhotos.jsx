/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

const style = {
  height: '65px',
  width: '65px'
};

const UploadPhotos = (props) => {
  const [previews, setPreviews] = useState([]);

  const handleSelected = (event) => {
    let len = Object.keys(event.target.files);

    let files = event.target.files
    let data = [];
    for (let i = 0; i < len.length; i++) {
      let url = URL.createObjectURL(files[len[i]]);
      data.push(url);
    };
    setPreviews([...previews, ...data]);
  };

  return (
    <div className='upload'>
      <label htmlFor='uploadPhotos' className='photoLabel'>
        <input id='uploadPhotos' type='file' multiple accept='image/*' onChange={handleSelected} style={{display: 'none'}}/>
        Select Images
      </label>
      <div>
        {previews.length > 0
          ? previews.map(photo => { return <img style={style} className='thumbnail' src={photo}></img>})
          : <span>No images selected</span>
        }
      </div>
      {props.error && <div>Too many pictures</div>}
    </div>
  );
};

export default UploadPhotos;