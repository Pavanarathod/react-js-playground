import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// this is oneway
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const allProducts = await axios.get("/api/products");
      const { data } = allProducts;
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
