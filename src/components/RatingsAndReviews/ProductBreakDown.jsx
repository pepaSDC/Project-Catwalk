import React from 'react';

export const ProductBreakdown = (props) => {
  let style = {
    padding: '5px'
  }
  return (
    <div className="productBreakdown" style={style}>
      <div>
        <p>Size</p>
        <div> bar ==============</div>
      </div>
      <div>
        <p>Comfort</p>
        <div> bar ==============</div>
      </div>
    </div>
  );
}