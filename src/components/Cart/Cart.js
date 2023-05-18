import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const handleClick = () => {
    window.alert("Note: This is only a test application. Checkout feature not functional");
  };

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const subtractQuantity = () => {
    if (quantity === 0) {
      window.alert("Cannot go below zero quantity");
    } else {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };
  return (
    <div>
      <div className="cart-items">
        <div className="headings">
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        <div className="item-details">
          <div className="img-and-name detail">
            <img src="https://images.asos-media.com/products/another-influence-arm-panel-crew-neck-sweat/9851612-1-black" alt="main" />
            <p>adidas Originals Forum Low CL trainers in white</p>
          </div>
          <div className="price detail">
            <p>£35.00</p>
          </div>
          <div className="quantit detail">
            <p className="change" onClick={addQuantity}>
              +
            </p>
            <p>{quantity}</p>
            <p className="change" onClick={subtractQuantity}>
              -
            </p>
            <p>Remove</p>
          </div>
          <div className="subtotal detail">
            <p>£{quantity * 35}.00</p>
          </div>
        </div>
      </div>
      <div className="order-summary-container">
        <div className="order-summary">
          <div>
            <p>Subtotal:</p>
            <p>£{quantity * 35}.00</p>
          </div>
          <div>
            <p>Shipping:</p>
            <p>£4.99</p>
          </div>
          <div className="order-total">
            <p>Order Total:</p>
            <p>£{quantity * 35 + 4.99}</p>
          </div>
        </div>
        <div className="checkout-button" onClick={handleClick}>
          Checkout
        </div>
      </div>
    </div>
  );
};

export default Cart;
