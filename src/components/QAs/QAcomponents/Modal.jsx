/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ open, children, onClose, qBody, product_name }) => {
  if (!open) { return null; };
  return (
    <div>
      <div className='modalOverlay' onClick={onClose}></div>
      <div className='modal'>
        <div className='title'>
          Submit your Answer
          <div className='subtitle'>{product_name}: {qBody}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;