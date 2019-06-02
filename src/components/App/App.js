import React from "react";
import LoginPage from "../LoginPage/LoginPage";
import DashBoard from "../Dashboard/Dashboard";
import "./App.scss";
import { Route } from "react-router";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/:user" component={DashBoard} />
      </div>
    );
  }
}

export default App;
