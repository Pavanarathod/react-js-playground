import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { authActions } from "../features/authSlice";

const Loginpage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const login = () => {
    dispatch(authActions.login(true));

    history.replace(from);
  };

  return (
    <div>
      <h1>Please login to the application</h1>
      <button className="px-5 py-2 bg-blue-500 text-white" onClick={login}>
        Sign-in
      </button>
    </div>
  );
};

export default Loginpage;
