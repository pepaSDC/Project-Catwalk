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
  const [yourOutfitStorage, setYourOutfitStorage] = useState([]); //outfit id's
  const [outfitProductArray, setOutfitProductArray] = useState([]);//outfit output to the carousel


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

  const updateYourOutfitInfoState = () => {
    const promiseArr = yourOutfitStorage.map(curId => {
        return axios
                .all([getProduct(curId), getProductStyles(curId)])
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




  useEffect(() => {
    window.localStorage.setItem('yourOutfitStorage', JSON.stringify(yourOutfitStorage));
  }, [yourOutfitStorage]);

  useEffect(() =>{
    var string1 = JSON.parse(localStorage.getItem('yourOutfitStorage'));
    setYourOutfitStorage(string1)
  },[]);


  useEffect(() =>{

    if(yourOutfitStorage.length > 0) {
      updateYourOutfitInfoState()
        .then(pInfoStyles => {
        var dataOnly = pInfoStyles.map((cur) => {
        return [cur[0].data, cur[1].data.results[0].photos[0].thumbnail_url];
        })

        setOutfitProductArray(dataOnly);
      })
    }
    if(yourOutfitStorage.length === 0) {
      return setOutfitProductArray([])
    }
  },[yourOutfitStorage]);

  const addOutfitItem = () => {

    if(yourOutfitStorage.includes(currentProductId) === false){
     var outfitUpdate = yourOutfitStorage.concat([currentProductId]);
      setYourOutfitStorage(outfitUpdate);
    }
  }

  const deleteOutfitItem = (id) => {
    setYourOutfitStorage(yourOutfitStorage => yourOutfitStorage.filter(x => x !== id.toString()));
   }

  const deleteClickHandler = (id) => {
    deleteOutfitItem(id);
  }

  const addClickHandler = () => {
    addOutfitItem();
  }


  return (
    <div id='Related_Products'>

      <div className="app"></div>
      <RelatedProductsCardCarousel
        relatedProductArray={relatedProductArray}
        currentProductInfo={currentProductInfo}
        currentProductName={currentProductName}
      />
      <div className="youOutfit">
        <OutfitCarousel outfitProductArray={outfitProductArray}
                        deleteClickHandler={deleteClickHandler}
                        addClickHandler={addClickHandler}></OutfitCarousel>
      </div>
    </div>
  );
}
//