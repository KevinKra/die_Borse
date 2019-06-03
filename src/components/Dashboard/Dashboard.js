import React, { Component } from "react";
import "./Dashboard.scss";
import LineGraph from "../LineGraph/LineGraph";

class DashBoard extends Component {
  render() {
    return (
      <main className="DashBoard">
        <section className="primary-content">
          <article className="main">
            <h2>Welcome, {this.props.match.params.user}.</h2>
            <h4>AAPL - Apple Inc.</h4>
            <div className="line-graph">{<LineGraph />}</div>
            <div className="news">
              <h2>Recent News</h2>
            </div>
          </article>
          <div>
            <section className="support">
              <article className="ph">1</article>
              <article className="ph">2</article>
              <article className="ph">3</article>
              <article className="ph">4</article>
              <article className="ph">5</article>
              <article className="ph">6</article>
              <article className="ph">7</article>
              <article className="ph">8</article>
              <article className="ph">9</article>
              <article className="ph">10</article>
            </section>
          </div>
        </section>
      </main>
    );
  }
}

export default DashBoard;
