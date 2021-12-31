/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
// import React from 'react'
// import {  useParams, useLocation } from 'react-router-dom';

// import { GlobalContext } from '../../../context/GlobalState.js'
import { OverviewContext } from '../../../context/OverviewState.js'


export const ProductDescription = (props) => {
  // const { currentProductId } = useContext(GlobalContext);
  const { getProductInfo, productInfo } = useContext(OverviewContext);
  // let id = currentProductId;

  // useEffect(() => {
  //   getProductInfo(id)
  // }, [id])

  const productSlogan = productInfo.data ? productInfo.data.slogan : ''
  const productDescription = productInfo.data ? productInfo.data.description : ''

  return (
    <div>
      <div>
        {productSlogan}
      </div>
      <div>
        {productDescription}
      </div>
    </div>
  );
}

