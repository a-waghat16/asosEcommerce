import React, { useState, useEffect } from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const [itemSubTotal, setitemSubTotal] = useState(0);

  useEffect(() => {
    const roundedTotal = (props.item.quantity * props.item.price).toFixed(2);
    setitemSubTotal(roundedTotal);
  }, [props.item]);
  const addQuantity = () => {
    props.handleUpdateQuantity(props.item.id, props.item.quantity + 1);
  };

  const subtractQuantity = () => {
    props.handleUpdateQuantity(props.item.id, props.item.quantity - 1);
  };

  const handleRemove = () => {
    props.handleRemoveFromCart(props.item.id);
  };
  return (
    <div className="item-details">
      <div className="img-and-name detail">
        <img src={`https://${props.item.imageUrl}`} alt="item" />
        <p>{props.item.name}</p>
      </div>
      <div className="price detail">
        <p>£{props.item.price}</p>
      </div>
      <div className="quantit detail">
        <p className="change" onClick={addQuantity}>
          +
        </p>
        <p>{props.item.quantity}</p>
        <p className="change" onClick={subtractQuantity}>
          -
        </p>
        <p onClick={handleRemove} className='remove'>Remove</p>
      </div>
      <div className="subtotal detail">
        <p>£{itemSubTotal}</p>
      </div>
    </div>
  );
};

export default CartItem;
