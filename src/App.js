import "./App.css";
import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SoftwarePage from "./pages/SoftawrePage";
import CraftsmanPage from "./pages/CraftsmanPage";

function App() {
  return(<div>
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <HomePage/>
        </Route>

        <Route path="/software">
          <SoftwarePage/>
        </Route>

        <Route path="/craftsman">
          <CraftsmanPage/>
        </Route>
      </Switch>
    </Router>
  </div>)
}

export default App;
