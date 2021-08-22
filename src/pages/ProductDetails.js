import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../features/productDetailSlice";
import "./ProductDetails.css";

const ProductDetails = ({ match }) => {
  const productD = useSelector((state) => state.productDetail);
  const { error, loading, product } = productD;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <div className="product__">
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <p>{product.price}</p>
        <strong>
          {product.countInStock > 0 ? "In Stock" : "Out of Stack"}
        </strong>
      </div>

      <div>
        {/* <form>
          <input
            name="cars"
            id="cars"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          {[...Array(product.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </form> */}
      </div>
    </div>
  );
};

export default ProductDetails;
