import React, { PureComponent } from "react";
import Chart from "chart.js";
import "./LineGraph.scss";
import { mockStocksDaily, dummyData } from "../../utils/mockData";
import { IntradayFive } from "../../utils/api/apiCalls";
let myLineChart;

export default class LineGraph extends PureComponent {
  chartRef = React.createRef();

  componentDidMount() {
    IntradayFive();
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    if (typeof myLineChart !== "undefined") myLineChart.destroy();
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Daily",
            data: dummyData,
            fill: false,
            borderColor: "rgb(116, 141, 26)",
            borderWidth: 1,
            lineTension: 0.1,
            pointBorderWidth: 0.7,
            pointStyle: "rectRot"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ],
          yAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ]
        },
        animation: {
          duration: 0
        },
        layout: {
          padding: { right: 10 }
        },
        legend: {
          display: true,
          position: "bottom"
        },
        tooltips: {}
      }
    });
  };
  render() {
    return (
      <article className="LineGraph">
        <canvas id="myChart" ref={this.chartRef} />
      </article>
    );
  }
}
