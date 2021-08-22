import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);

      return data;
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      throw new Error(err);
    }
  }
);

const productDetailSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });

    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default productDetailSlice.reducer;
