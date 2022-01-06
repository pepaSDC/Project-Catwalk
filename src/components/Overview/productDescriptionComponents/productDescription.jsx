import React, { useState, useEffect, useContext } from 'react'
import {  useParams, useLocation } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState.js'
import { OverviewContext } from '../../../context/OverviewState.js'

const DescriptionDivStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const SloganAndDescriptionDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '66%'
}

const CurrentProductFeaturesDivStyle = {
  display: 'flex',
  width: '34%',
  flexDirection: 'column',

}


export const ProductDescription = (props) => {
  const { currentProductId } = useContext(GlobalContext);
  const { getProductInfo, productInfo, resetProductValue } = useContext(OverviewContext);

  useEffect(() => {
    getProductInfo(currentProductId)
    return (() => {
      resetProductValue([])
    })
  }, [currentProductId])

  const productSlogan = productInfo.data ? productInfo.data.slogan : ''
  const productFeatures = productInfo.data ? productInfo.data.features : []
  const productDescription = productInfo.data ? productInfo.data.description : ''


  return (
    <div
      className="DescriptionDiv"
      style={DescriptionDivStyle}>
      <div
        className="SloganAndDescription"
        style={SloganAndDescriptionDivStyle}>
        <div>
          {productSlogan}
        </div>
        <div>
          {productDescription}
        </div>
      </div>
      <div
        className="ProductFeatures"
        style={CurrentProductFeaturesDivStyle}>
          {productFeatures.map((featureItem, index) =>
            <div
              key={index}>
                {featureItem.feature}: {featureItem.value}
            </div>
          )}
      </div>
    </div>
  );
}

