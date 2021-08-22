import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "userInfo/getUsers",
  async ({ email, password }, api) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const allUsers = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      const { data } = allUsers;

      localStorage.setItem("loggeduser", JSON.stringify(data));
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
