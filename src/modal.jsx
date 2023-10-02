import React from "react";
import { ModalContainer } from "./style";

const Modal = ({ children, title, description, closeIcon, setCount }) => {
  return (
    <div className="modal_container" style={ModalContainer}>
      <div>
        <h3 onClick={() => setCount(false)}>{closeIcon}</h3>
        <h1>{title}</h1>
      </div>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Modal;
