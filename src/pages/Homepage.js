import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/Products";
import { fetchProducts } from "../features/productSlice";
import "./Home.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <div key={product._id} className="all__products">
          <Products product={product} />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
