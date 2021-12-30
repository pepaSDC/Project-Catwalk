import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../../../../context/GlobalState.js'
import { ProductGalleryThumbnailItem } from './ProductGalleryThumbnailItem.jsx'
import { OverviewContext } from '../../../../context/OverviewState.js'


export const ProductGalleryThumbnails = () => {
  const { currentProductId } = useContext(GlobalContext);
  const {
    getProductStyles, productStyles,
    featuredStyleIndex, featuredProductImageIndex
  } = useContext(OverviewContext);

  let id = currentProductId;

  useEffect(() => {
    getProductStyles(id);
  }, [id])


  let featuredProductThumbnailsArray = productStyles.data ? productStyles.data.results[featuredStyleIndex].photos : []
  let featuredProduct = productStyles.data ? productStyles.data.results[featuredStyleIndex] : []

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