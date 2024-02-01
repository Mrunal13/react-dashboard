import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, BarElement, Title, Tooltip, Filler, Legend);

var barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
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
  ],
};

var barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  datasetFill: false,
};

const BarChart = () => {
  return (
    <Bar
      style={{
        minHeight: "250px",
        height: "250px",
        maxHeight: "250px",
        maxWidth: "100%",
      }}
      options={barChartOptions}
      data={barChartData}
    />
  );
};

export default BarChart;
