import React from 'react';

const Modal = ({ show, onClose, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div id="demo-popup" className="modal-overlay visible">
      <div className="modal">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <div className="modal-content">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;