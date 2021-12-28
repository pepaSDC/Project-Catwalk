import React, { useState, useEffect, useContext } from 'react'
import {  useParams, useLocation } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState.js'
import api from '../../../../server/api.js';


export const ProductDescription = (props) => {
  const { currentProductId } = useContext(GlobalContext);

  const [description, setDescription] = useState();
  const [slogan, setSlogan] = useState();

  api.getProductInfo(currentProductId, (error, results) => {
    if (error) {
      console.log(error)
    } else {
      setDescription(results.data.description);
      setSlogan(results.data.slogan);
    }
  })

  return (
    <div>
      <div>
        {slogan}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
}