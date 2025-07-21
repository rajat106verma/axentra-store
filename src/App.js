// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Chatbot from './components/Chatbot';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Profile from './components/Profile';

function App() {
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage on app load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) setCart(savedCart);
  }, []);

  // ✅ Save cart to localStorage on cart update
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ✅ Remove item by index
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark p-3 d-flex justify-content-between">
          <Link to="/" className="navbar-brand mb-0 h1">Axentra</Link>
          <div>
            <Link to="/cart" className="btn btn-outline-light me-2">
              🛒 {cart.length} item{cart.length !== 1 && 's'}
            </Link>
            <Link to="/orders" className="btn btn-outline-light me-2">📦 Orders</Link>
            <Link to="/profile" className="btn btn-outline-light">👤 Profile</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
