import React, {useState} from 'react';

export const CharacteristicsForm = (props) => {
  const [rating, useRating] = useState(null);

  let selection;

  switch (props.char) {
    case 'Size':
      selection = {1: 'A size too small', 2: '1/2 a size too small', 3: 'Perfect', 4: '1/2 a size too big', 5: 'A size too wide'};
      break;
    case 'Width':
      selection = {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect', 4: 'Slightly wide', 5: 'Too wide'};
      break;
    case 'Comfort':
      selection = {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok', 4: 'Comfortable', 5: 'Perfect'};
      break;
    case 'Quality':
      selection = {1: 'Poor', 2: 'Below average', 3: 'What I expected', 4: 'Pretty great', 5: 'Perfect'};
      break;
    case 'Length':
      selection = {1: 'Runs Short', 2: 'Runs slightly short', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs Long'}
      break;
    case 'Fit':
      selection = {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect', 4: 'Runs slightly large', 5:'Runs large'};
      break;
    default:
      selection = {};
      break;
  }


  return (
    <div>
      <p style={{margin: '0'}}>{props.char}</p>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <label>1</label>
          <input onChange={()=>useRating(1)} type="radio" name={props.char} value='1' className={props.char}></input>
        </div>
        <div>
          <label>2</label>
          <input onChange={()=>useRating(2)} type="radio" name={props.char} value='2'className={props.char}></input>
        </div>
        <div>
          <label>3</label>
          <input onChange={()=>useRating(3)} type="radio" name={props.char} value='3' className={props.char}></input>
        </div>
        <div>
          <label>4</label>
          <input onChange={()=>useRating(4)} type="radio" name={props.char} value='4' className={props.char}></input>
        </div>
        <div>
          <label>5</label>
          <input onChange={()=>useRating(5)} type="radio" name={props.char} value='5' className={props.char}></input>
        </div>
        <span style={{width: '30%'}}>{rating ? selection[rating]: 'None Selected'}</span>
      </div>
    </div>
  );
}