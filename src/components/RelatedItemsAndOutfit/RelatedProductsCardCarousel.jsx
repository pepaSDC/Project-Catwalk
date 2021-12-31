/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import RelatedProduct from './RelatedProduct.jsx';
import './styles.css';



const RelatedProductsCardCarousel = (props) => {
//index does not go below 0 and above products array
    const [index, setIndex] = useState(0);

    const slideLeft = () => {
      if (index - 1 >= 0) {
        setIndex(index - 1);
      }
    };

    const slideRight = () => {
      if (index + 1 <= props.relatedProductArray.length - 1) {
        setIndex(index + 1);
      }
    };

    const handleMouseDown = (e) => {
      console.log(e.target);

    };
    let itemDisplayAmount = 4;
    let productArr = props.relatedProductArray.slice(index, index+itemDisplayAmount);
  return (
   <div className="bigCardContainer">
    <div className={'card-container'}>
      {index === 0
        ?<div></div>
        :<button className="arrowLeft" onClick={slideLeft}>&#8647;</button>
      }

      {productArr.map((ele, idx) => {
        let position = "activeCard";
      return <RelatedProduct handleMouseDown={handleMouseDown}
              information={ele} key={idx} itemNum={idx} cardStyle={position}/>
    })}
    {index === props.relatedProductArray.length - itemDisplayAmount
        ?<div></div>
        :<button className="arrowRight" onClick={slideRight}>&#8649;</button>
      }

  </div>
  </div>
  )
}

export default RelatedProductsCardCarousel;