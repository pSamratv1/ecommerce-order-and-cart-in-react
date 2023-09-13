import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDecrement, cartIncrement, cartRemove } from "../redux-app/slices/CartSlice";

const CartCard = () => {

  const { cartItem } = useSelector((state) => state.cart);
  const items = cartItem;
  const dispatch = useDispatch();
  const handleIncerement = (value) => {
    dispatch(cartIncrement(value.id))
  }
  const handleDecrement = (value) => {
    dispatch(cartDecrement(value.id))
  }
  const handleRemove = (value) => {
    dispatch(cartRemove(value.id))
  }

  return (
    <div>
      {items.map((value,index) => (
        <div className="table-item" key={index}>
          <img className="cart-image" src={value.thumbnail} alt="Images" />
          <p className="cart-item-title">{value.title}</p>
          <button className="button2" onClick={(e) => handleIncerement(value)}>+</button>
          <p className="cart-quantity"> {value.quantity}</p>
          <button className="button3" onClick={(e) => handleDecrement(value)}>-</button>
          <button className="cart-btn" onClick={(e) => handleRemove(value)}>x</button>
          <p className="cart-price">${value.price}</p>
        </div>
      ))}
      
    </div>
  );
};

export default CartCard;
