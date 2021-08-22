import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../api/loginUser";

const userInfo = localStorage.getItem("loggeduser")
  ? JSON.parse(localStorage.getItem("loggeduser"))
  : null;

const initialState = {
  userInfo: userInfo,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logout(state) {
      localStorage.removeItem("loggeduser");
      state.userInfo = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
