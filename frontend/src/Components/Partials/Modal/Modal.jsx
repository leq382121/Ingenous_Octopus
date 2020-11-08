import React from "react";
import "./Modal.css";

export const Modal = ({ children, handleModalClose }) => {
  return (
    <div className="Modal">
      <div className='Modal_background' onClick={() => handleModalClose()}></div>
      <div className='Modal_container'>
        {children}
      </div>
    </div>
  );
};
