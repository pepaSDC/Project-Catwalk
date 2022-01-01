import React from 'react';

export const CharacteristicsForm = (props) => {
  return (
    <div>
      <p>{props.char}</p>
      <label>1</label>
      <input type="radio" name={props.char} value='1'></input>
      <label>2</label>
      <input type="radio" name={props.char} value='2'></input>
      <label>3</label>
      <input type="radio" name={props.char} value='3'></input>
      <label>4</label>
      <input type="radio" name={props.char} value='4'></input>
      <label>5</label>
      <input type="radio" name={props.char} value='5'></input>

    </div>
  );
}