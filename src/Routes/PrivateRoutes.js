import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoutes = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoutes;
