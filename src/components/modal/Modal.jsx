// import { useEffect } from "react";
import { Backdrop, Wraper } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal");

const Modal = ({ children }) => {
  // useEffect(() => {
  //   const onKeyDown = (e) => {
  //     if (e.code === "Escape") {
  //       closeModal();
  //     }
  //   };
  //   window.addEventListener("keydown", onKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", onKeyDown);
  //   };
  // }, [closeModal]);

  // const onBackdropClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     closeModal();
  //   }
  // };
  return createPortal(
    <Backdrop>
      <Wraper>
        {/* <Close type="button">Close</Close> */}
        {/* {this.props.children} */}
        {children}
      </Wraper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
