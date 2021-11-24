import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import FinalPage from "./pages/FinalPage";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/final" component={FinalPage} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
