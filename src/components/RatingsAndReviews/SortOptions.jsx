import React, {useContext} from 'react';
import { RatingsAndReviewsContext } from '../../context/RatingsAndReviewsState.js';
import { GlobalContext } from '../../context/GlobalState.js';

export const SortOptions = (props) => {
  const selectStyle = {
    border: 'none',
  }

  const {currentProductId} = useContext(GlobalContext);
  const {getSort} = useContext(RatingsAndReviewsContext);

  const changeHandler = (event) => {
    console.log(event.target.value);
    getSort(currentProductId, event.target.value);
  }

  return (
    <div style={{margin: '0 10px', padding: '0 10px'}}>
      {props.number} reviews, sorted by
      <select onChange={changeHandler} style={selectStyle} name="sort">
        <option value="relevant">relavence</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>
    </div>
  );
}