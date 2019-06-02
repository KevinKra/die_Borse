import React, { Component } from "react";
import "./StartPage.scss";
import { Link } from "react-router-dom";

class StartPage extends Component {
  state = {
    user: "",
    password: ""
  };

  captureInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  toDashboard = e => {
    e.preventDefault();
    this.props.history.push(`/${this.state.user}`);
  };

  render() {
    return (
      <main className="StartPage">
        <div className="image" />
        <section className="login">
          <form onSubmit={e => this.toDashboard(e)}>
            <h2>Welcome to dieBörse</h2>
            <label htmlFor="user">Email or Username</label>
            <input
              type="text"
              autoComplete="off"
              required
              name="user"
              onChange={this.captureInput}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="off"
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
