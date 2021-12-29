import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import axios from 'axios';
import Promise from 'bluebird';
import RelatedProductsCardCarousel from './RelatedProductsCardCarousel.jsx';

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
  //this call is going to get the images for each product, need to filter a bit
  const getProductStyles = (id) => {
    return axios({
      method: 'GET',
      url: `/products/${id}/styles`
    })
  }



  //function to update state with an array of currentId return promises
  const updateRelatedProductInfoState = (id) => {
    const promiseArr = getRelatedIDs(id)
    .then(ids => {
      return ids.data.map(curId => {
        return axios
                .all([getProduct(curId), getProductStyles(curId)])
      })
    })

    return Promise.all(promiseArr);
  }


  useEffect(() =>{
    //update the related products state is called an used
    updateRelatedProductInfoState(currentProductId)
    .then(pInfoStyles => {
      var dataOnly = pInfoStyles.map((cur) => {
      return [cur[0].data, cur[1].data.results[0].photos[0].thumbnail_url];
      })
      setRelatedProductArray(dataOnly);
    })

  },[currentProductId]);
  console.log('line 62 in relatedProducts' , relatedProductArray);
  return (
    <div>
      <div className="app">Hello From RelatedProducts</div>
      <RelatedProductsCardCarousel relatedProductArray={relatedProductArray}/>
    </div>
  );
}