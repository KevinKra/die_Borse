import React, { Component } from "react";
import "./StartPage.scss";
import { Link } from "react-router-dom";

class StartPage extends Component {
  state = {
    login: "",
    password: ""
  };

  captureInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toDashboard = e => {
    this.props.history.push();
  };

  render() {
    return (
      <main className="StartPage">
        <div className="image" />
        <section className="login">
          <form>
            <h2>Welcome to dieBörse</h2>
            <label htmlFor="login">Email or Username</label>
            <input
              type="text"
              autocomplete="off"
              required
              name="login"
              onChange={this.captureInput}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autocomplete="off"
              required
              name="password"
              onChange={this.captureInput}
            />
            <Link
              to=""
              style={{
                textDecoration: "none"
              }}
            >
              <p>Forgot your username/password?</p>
            </Link>
            <button>Sign In</button>
          </form>
        </section>
      </main>
    );
  }
}

export default StartPage;
