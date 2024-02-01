import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

const pieData = {
  labels: ["Chrome", "IE", "FireFox", "Safari", "Opera", "Navigator"],
  datasets: [
    {
      data: [700, 500, 400, 600, 300, 100],
      backgroundColor: [
        "#f56954",
        "#00a65a",
        "#f39c12",
        "#00c0ef",
        "#3c8dbc",
        "#d2d6de",
      ],
    },
  ],
};
const pieOptions = {
  maintainAspectRatio: false,
  responsive: true,
};

const PieChart = () => {
  return (
    <Pie
      style={{
        minHeight: "250px",
        height: "250px",
        maxHeight: "250px",
        maxWidth: "100%",
      }}
      options={pieOptions}
      data={pieData}
    />
  );
};

export default PieChart;
