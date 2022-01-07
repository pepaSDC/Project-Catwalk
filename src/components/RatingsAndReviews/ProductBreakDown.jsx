/* eslint-disable react/prop-types */
import React from 'react';
import { ProductBar } from './ProductBar.jsx';

export const ProductBreakdown = (props) => {
  let style = {
    padding: '0',
    margin: '20px 0'
  }
  return (
    <div className="productBreakdown" style={style}>
      {props.characteristics ? Object.keys(props.characteristics).map((item) => <ProductBar type={item} breakdown={props.characteristics[item]} key={props.characteristics[item].id}/>) : null}
    </div>
  );
}