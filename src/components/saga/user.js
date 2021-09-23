const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {};
