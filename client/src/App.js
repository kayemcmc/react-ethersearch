import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import store from "./store";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={props => <Home />} />
            </Switch>
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
