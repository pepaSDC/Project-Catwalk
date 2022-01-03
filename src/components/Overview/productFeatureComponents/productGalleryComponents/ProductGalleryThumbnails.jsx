/* eslint-disable react/prop-types */
import React, { useEffect, useContext } from 'react'
// import React from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { ProductGalleryThumbnailItem } from './ProductGalleryThumbnailItem.jsx'
import { OverviewContext } from '../../../../context/OverviewState.js'


export const ProductGalleryThumbnails = (props) => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles,
    featuredStyleIndex, featuredProductImageIndex, resetProductValue
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id);
    return (()=> {
      resetProductValue([])
    })
  }, [id])


  let featuredProductThumbnailsArray = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos : []
  let featuredProduct = productStyles.data ? productStyles.data.results[featuredStyleIndex] : []

  // let featuredProductThumbnailsArray = props.currentProductStyle ? props.currentProductStyle.data.results[props.currentStyleIndex].photos : []
  // let featuredProduct = props.currentProductStyle ? props.currentProductStyle.data.results[props.currentStyleIndex] : []

  // console.log('line 22 in ProductGalleryThumbnails: ', featuredProductThumbnailsArray);

  return (
    <div>
      {featuredProductThumbnailsArray.map(
        (listItem, index) =>
          <ProductGalleryThumbnailItem
            item={listItem}
            key={index}
            index={index}
            style_id={featuredProduct.style_id}/>
      )}
    </div>
  );
}