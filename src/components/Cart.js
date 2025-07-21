// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="card mb-2" key={index}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <span>{item.name} - ₹{item.price}</span>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h4>Total: ₹{total}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
