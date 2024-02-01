import React from "react";
import { Line } from "react-chartjs-2";

const areaChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Digital Goods",
      fill: true,
      backgroundColor: "rgba(60,141,188,0.9)",
      borderColor: "rgba(60,141,188,0.8)",
      pointRadius: true,
      pointColor: "#3b8bba",
      pointStrokeColor: "rgba(60,141,188,1)",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(60,141,188,1)",
      data: [28, 48, 40, 19, 86, 27, 90],
    },
    {
      label: "Electronics",
      fill: true,
      backgroundColor: "rgba(210, 214, 222, 1)",
      borderColor: "rgba(210, 214, 222, 1)",
      pointRadius: true,
      pointColor: "rgba(210, 214, 222, 1)",
      pointStrokeColor: "#c1c7d1",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const areaChartOptions = {
  elements: {
    line: {
      tension: 0.4,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    x: {
      gridLines: {
        display: false,
      },
    },

    y: {
      gridLines: {
        display: false,
      },
    },
  },
};

const AreaChart = () => {
  return (
    <Line
      style={{
        minHeight: "250px",
        height: "250px",
        maxHeight: "250px",
        maxWidth: "100%",
      }}
      options={areaChartOptions}
      data={areaChartData}
    />
  );
};

export default AreaChart;
