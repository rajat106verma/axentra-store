import React from 'react';

const products = [
  {
    id: 1,
    name: 'Axentra T-Shirt',
    price: 799,
    image: 'https://res.cloudinary.com/demo/image/upload/v1693086642/tshirt_front.png',
  },
  {
    id: 2,
    name: 'Axentra Hoodie',
    price: 1499,
    image: 'https://res.cloudinary.com/demo/image/upload/v1693086642/jacket_black.png',
  },
  {
    id: 3,
    name: 'Axentra Jeans',
    price: 1299,
    image: 'https://res.cloudinary.com/demo/image/upload/v1693086642/jeans_blue.png',
  },
  {
    id: 4,
    name: 'Axentra Top',
    price: 699,
    image: 'https://res.cloudinary.com/demo/image/upload/v1693086642/top_women.png',
  },
  {
    id: 5,
    name: 'Axentra Cap',
    price: 299,
    image: 'https://res.cloudinary.com/demo/image/upload/v1693086642/cap_blue.png',
  },
];

const ProductList = ({ addToCart }) => (
  <div className="container mt-4">
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: '300px', objectFit: 'contain' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">₹{product.price}</p>
              <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
