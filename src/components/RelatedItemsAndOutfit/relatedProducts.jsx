import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import axios from 'axios';
import Promise from 'bluebird';
import RelatedProductsCardCarousel from './RelatedProductsCardCarousel.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';

export const RelatedProducts = () => {
  //global state import
  const { currentProductId } = useContext(GlobalContext);

  //local state
  const [relatedProductArray, setRelatedProductArray] = useState([]);
  const [currentProductInfo, setCurrentProductInfo] = useState({});
  const [currentProductName, setCurrentProductName] = useState('');
  const [yourOutfitStorage, setYourOutfitStorage] = useState([]);
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

    getProduct(currentProductId)
    .then(proInfo => {
      setCurrentProductInfo(proInfo.data.features);
      setCurrentProductName(proInfo.data.name);
    })

  },[currentProductId]);

  useEffect(() =>{
    setYourOutfitStorage(JSON.parse(window.localStorage.getItem('yourOutfitStorage')))
  },[]);

  useEffect(() => {
    window.localStorage.setItem('yourOutfitStorage', yourOutfitStorage);
  }, [count]);

  const addOutfitItem = () => {
    var outfitUpdate = yourOutfitStorage.concat([proInfo.data])
      setYourOutfitStorage(outfitUpdate);
  }
  //deleteoutfititem

  return (
    <div>
      <div className="app"></div>
      <RelatedProductsCardCarousel
        relatedProductArray={relatedProductArray}
        currentProductInfo={currentProductInfo}
        currentProductName={currentProductName}
      />
      <div className="youOutfit">
        <button onClick={addOutfitItem()}>Add current</button>
        <OutfitCarousel yourOutfitStorage={yourOutfitStorage} addOutfitItem={addOutfitItem}></OutfitCarousel>
      </div>
    </div>
  );
}