/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Outfit from './Outfit.jsx';
import './styles.css';



export const OutfitCarousel = (props) => {
  //props.yourOutfitStorage
  //props.addOutfitItem
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= props.yourOutfitStorage.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleMouseDown = (e) => {
    console.log(e.target);

  };
  let itemDisplayAmount = 3;
  let outfitArr = props.yourOutfitStorage.slice(index, index+itemDisplayAmount);
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
           addOutfitItem={props.addOutfitItem}
         />
       })}
     {index === props.yourOutfitStorage.length - itemDisplayAmount
         ?<div></div>
         :<button className="arrowRight" onClick={slideRight}>&#8649;</button>
       }

     </div>
   </div>
   )

}