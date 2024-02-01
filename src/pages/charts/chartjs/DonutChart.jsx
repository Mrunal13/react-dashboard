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
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const donutData = {
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
const donutOptions = {
  maintainAspectRatio: false,
  responsive: true,
};

const DonutChart = () => {
  return (
    <Doughnut
      style={{
        minHeight: "250px",
        height: "250px",
        maxHeight: "250px",
        maxWidth: "100%",
      }}
      options={donutOptions}
      data={donutData}
    />
  );
};

export default DonutChart;
