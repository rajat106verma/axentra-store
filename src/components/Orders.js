// src/components/Orders.js
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div className="card mb-2" key={index}>
            <div className="card-body">
              {order.name} - ₹{order.price}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
