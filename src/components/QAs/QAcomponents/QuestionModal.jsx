/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ open, children, onClose, qBody, product_name }) => {
  if (!open) { return null; };
  return (
    <div>
      <div className='modalOverlay' onClick={onClose}></div>
      <div className='modal'>
        <div className='title'>
          Ask Your Question
          <div className='subtitle'>About the {product_name}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;