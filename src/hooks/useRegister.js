import { authActions } from "../reducer/userReducer";
import { useDispatch } from "react-redux";
import axios from "axios";

const useRegister = async ({ name, email, password }) => {
  const dispatch = useDispatch();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const responce = await axios.post("/api/users", body, config);
    dispatch(authActions.register(responce.data));
  } catch (err) {
    console.log(err);
  }
};

export default useRegister;
