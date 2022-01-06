/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Outfit from './Outfit.jsx';
import './styles.css';



const OutfitCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= props.outfitProductArray.length - 1) {
      setIndex(index + 1);
    }
  };
  let card = {
    'image': 'https://pic.onlinewebfonts.com/svg/img_255634.png',
    'name': 'Add Current Item'
  }

  let outfitArr =  [card].concat(props.outfitProductArray);
  console.log('outfit arr::',outfitArr)
  let itemDisplayAmount = 4;
  outfitArr = outfitArr.slice(index, index+itemDisplayAmount);

  return (

    <div className="bigCardContainer">
     <div className={'card-container'}>
       {index === 0
         ?<div></div>
         :<button className="arrowLeft" onClick={slideLeft}>&#8647;</button>
       }

       {outfitArr.map((ele, idx) => {
         let position = "activeCard";
         return <Outfit
           information={ele}
           key={idx}
           itemNum={idx}
           cardStyle={position}
           deleteClickHandler={props.deleteClickHandler}
           addClickHandler={props.addClickHandler}
         />
       })}
     {index === outfitArr.length - itemDisplayAmount || outfitArr.length
         ?<div></div>
         :<button className="arrowRight" onClick={slideRight}>&#8649;</button>
       }

     </div>
   </div>
   )

}

export default OutfitCarousel;