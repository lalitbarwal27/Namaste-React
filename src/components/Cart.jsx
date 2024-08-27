import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>Cart {cart.length}</div>
      <button onClick={() => clear()}>Clear</button>
    </>
  );
};

export default Cart;
