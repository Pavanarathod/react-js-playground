import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import React from "react";

import Homepage from "./pages/Homepage";
import Publicpage from "./pages/Publicpage";
import Privatepage from "./pages/Privatepage";
import Header from "./components/Header";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Loginpage from "./pages/Loginpage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/public" component={Publicpage} />
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Loginpage} />
        <PrivateRoutes path="/private">
          <Privatepage />
        </PrivateRoutes>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
