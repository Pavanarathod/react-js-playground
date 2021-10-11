import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../features/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      {user ? (
        <>
          <h1>you'r logged in you can logout</h1>
          <button
            className="px-4 py-2 bg-red-600 text-white "
            onClick={signOut}
          >
            Sign out
          </button>
        </>
      ) : (
        <h1>your not logged in</h1>
      )}

      <div className="flex flex-col underline">
        <Link to="/public">public page..</Link>
        <Link to="/private">Private page</Link>
      </div>
    </div>
  );
};

export default Header;
