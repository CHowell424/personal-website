import "./StyleSheets/App.css";
import React from "react";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SoftwarePage from "./pages/SoftawrePage";
import CraftsmanPage from "./pages/CraftsmanPage";
import Navagation from "./Navagation";
import Contact from "./pages/HomePageParts/Contact";

function App() {
  return(<div>
    <Navagation/>
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
    <hr></hr>
    <article className="header" id="contact">
            <Contact/>
    </article>
  </div>)
}

export default App;
