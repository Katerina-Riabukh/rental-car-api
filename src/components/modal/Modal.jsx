import { useState } from "react";
import CartProduct from "../cart-product/CartProduct";

const Modal = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div>
      <div>
        <button type="button" onClick={setIsopen(!isOpen)}>
          Close
        </button>
        <CartProduct />
      </div>
    </div>
  );
};

export default Modal;
