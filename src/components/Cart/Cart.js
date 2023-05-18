import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [orderSubTotal, setOrderSubTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    const orderSubTotal = cartItems.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0);

    const roundedSubTotal = orderSubTotal.toFixed(2);
    const roundedTotal = (orderSubTotal + 4.99).toFixed(2);
    setOrderSubTotal(roundedSubTotal);
    setOrderTotal(roundedTotal);
  }, [cartItems]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 0) {
      window.alert("Cant go below zero");
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleClick = () => {
    window.alert("Note: This is only a test application. Checkout feature not functional");
  };
  return (
    <div>
      <Link className="continue-shopping" to="/products">
        Continue Shopping
      </Link>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          <div className="headings">
            <div>Item</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>
        ) : (
          ""
        )}

        {cartItems.length > 0 ? (
          <div className="cart-container">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateQuantity={handleUpdateQuantity} />
            ))}
          </div>
        ) : (
          <div className="empty-cart">Your Cart is empty</div>
        )}
      </div>
      <div className="order-summary-container">
        <div className="order-summary">
          <div>
            <p>Subtotal:</p>
            <p>£{orderSubTotal}</p>
          </div>
          <div>
            <p>Shipping:</p>
            <p>£4.99</p>
          </div>
          <div className="order-total">
            <p>Order Total:</p>
            <p>£{orderTotal}</p>
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
