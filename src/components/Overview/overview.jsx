import { GlobalContext } from '../../context/GlobalState.js'
import React, { useState, useEffect, useContext } from 'react'

import { HeaderBar } from './headerBarComponents/headerBar.jsx'

import { ProductFeature } from './productFeatureComponents/productFeature.jsx'
import { ProductDescription } from './productDescriptionComponents/productDescription.jsx'

let divStyle = {
  padding: '10px',
  // margin: '10px',
}

export const Overview = () => {
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
    <div
    className="overview">

      <div
        style={divStyle}
        className="headerBar">
        <HeaderBar />
      </div>

      <div
        style={divStyle}
        className="subHeaderBar">
        subHeaderBar Text
      </div>

      <div
        style={divStyle}
        className="productFeature">
        <ProductFeature />
      </div>

      <div
        style={divStyle}
        className="productDescription">
        <ProductDescription />
      </div>

    </div>
  );
}