// src/Components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  // Fetch product details based on the id

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Details of product with id: {id}</p>
      {/* Display product details */}
    </div>
  );
};

export default ProductDetail;
