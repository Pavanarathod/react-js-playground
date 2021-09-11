import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "./pages/MUI/Notes";
import Create from "./pages/MUI/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theam = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theam}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Notes} exact />
          <Route path="/create" component={Create} exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
