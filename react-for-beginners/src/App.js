import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
