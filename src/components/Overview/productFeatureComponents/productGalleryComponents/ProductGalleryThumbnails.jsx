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

  let featuredProductThumbnailsArray = productStyles.data ? productStyles.data.results[featuredProductImageIndex].photos : []

  console.log('line 22 in ProductGalleryThumbnails: ', featuredProductThumbnailsArray);

  return (
    <div>
      {featuredProductThumbnailsArray.map(
        (thumbnailItem, index) =>
          <ProductGalleryThumbnailItem
            thumbnail={thumbnailItem.thumbnail_url}
            key={index}/>
      )}
    </div>
  );
}