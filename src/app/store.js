import { configureStore } from "@reduxjs/toolkit";
import productDetailSlice from "../features/productDetailSlice";
import productSlice from "../features/productSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    productDetail: productDetailSlice,
    users: userSlice,
  },
});
