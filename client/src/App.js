import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import "./App.css";

class App extends Component {
  state = { user: undefined };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <BrowserRouter basename={"/"}>
        <div>
          <Switch>
            <Route
              path="/"
              render={() => <Landing setUser={this.setUser} />}
              exact
            />
            <Route
              path="/feed"
              render={() => <Home user={this.state.user} />}
              exact
            />
            <Route
              path="/profile"
              render={() => <Profile user={this.state.user} />}
              exact
            />

            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
