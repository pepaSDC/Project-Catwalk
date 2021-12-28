import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import axios from 'axios';
import Promise from 'bluebird';

export const RelatedProducts = () => {
  //global state import
  const { currentProductId } = useContext(GlobalContext);
  //local state
  const [relatedProductArray, setRelatedProductArray] = useState([]);
  //axios call to get products information by id
  const getProduct = (id) => {
    return axios({
      method: 'GET',
      url: `/products/${id}`
    })
  }
  //axios call to get related products ids
  const getRelatedIDs = (id) => {
      return axios({
        method: 'GET',
        url: `/products/${id}/related`
      })
  }
  //function to update state with an array of currentId return promises
  const updateRelatedProductInfoState = (id) => {
    const promiseArr = getRelatedIDs(id)
    .then(ids => {
      return ids.data.map(curId => {
        return getProduct(curId);
      })
    })
    return Promise.all(promiseArr);
  }

  useEffect(() =>{
    //update the related products state is called an used
    updateRelatedProductInfoState(currentProductId)
    .then(pInfo => {
      setRelatedProductArray(pInfo);
    })

  },[currentProductId]);

  return (
    <div>
      <div className="app">Hello From RelatedProducts</div>
    </div>
  );
}