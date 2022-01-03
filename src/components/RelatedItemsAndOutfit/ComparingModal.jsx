/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';

const ComparingModal = (props) => {

  return(
    <div className="comp-modal" onClick={() => props.modalToggle === false ? props.setModalToggle(true) : props.setModalToggle(false) }>
    <table className="comp-card">
  <tr>
    <th>{props.rName}</th>
    <th>Features</th>
    <th>{props.currentProductName}</th>
  </tr>
  {props.comparingList.map((feat, idx) => {
    return(
    <tr className="feat-line" key={idx}>
      {props.rProductFeatures.includes(feat)
      ?<th className="left-check">&#10004;</th>
      :<th></th>
    }
    <th className="feat">{feat}</th>
      {props.oProductFeatures.includes(feat)
      ?<th className="right-check">&#10004;</th>
      :<th></th>
      }
    </tr>
    )
})}
</table>
</div>
  );
};


export default ComparingModal;