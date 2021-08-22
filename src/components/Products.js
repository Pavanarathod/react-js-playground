import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ product }) => {
  return (
    <div className="products">
      <Link to={`/product/details/${product._id}`} className="product__details">
        <h1>{product.name}</h1>
        <strong>{product.price}</strong>
      </Link>
    </div>
  );
};

export default Products;
