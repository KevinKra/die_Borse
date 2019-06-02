import React from "react";
import StartPage from "../StartPage/StartPage";
import DashBoard from "../Dashboard/Dashboard";
import "./App.scss";
import { Route } from "react-router";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={StartPage} />
        <Route exact path="/:user" component={DashBoard} />
      </div>
    );
  }
}

export default App;
