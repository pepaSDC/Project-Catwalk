import React, { useState } from 'react';

const style = {
  height: '65px',
  width: '65px'
}

const UploadPhotos = (props) => {
  var counter = 0;
  const [photos, setPhotos] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleSelected = (event) => {
    counter += 1;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
      let data = {
        id: counter,
        url: e.target.result
      };
      setPreviews([...previews, data]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input className='uploadPhotos' type='file' onChange={handleSelected}>
      </input>
      {previews.length > 0 && previews.map(photo => {
        return <img style={style} key={photo.id} className='thumbnail' src={photo.url}></img>
      })}
    </div>
  );
};

export default UploadPhotos;