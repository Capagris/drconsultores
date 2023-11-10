import React, { Component } from "react";
import * as Containers from "./components/containers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import { HomePage } from "./layout/index";
import { ExpertisePage } from "./layout/expertise";
import ReactGA from "react-ga";
ReactGA.initialize("UA-31040358-37");
ReactGA.pageview(window.location.pathname + window.location.search);
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Containers.Wrapper>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/expertise/:name" component={ExpertisePage} />
          </Containers.Wrapper>
        </Switch>
      </Router>
    );
  }
}

export default App;
