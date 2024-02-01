import React, { useEffect } from "react";
// import "flot/dist/es5/jquery.flot";
import "flot-pie/src/jquery.flot.pie.min.js";

const $ = window.$;
const donutData = [
  {
    label: "Series2",
    data: 30,
    color: "#3c8dbc",
  },
  {
    label: "Series3",
    data: 20,
    color: "#0073b7",
  },
  {
    label: "Series4",
    data: 50,
    color: "#00c0ef",
  },
];

const options = {
  series: {
    pie: {
      show: true,
      radius: 1,
      innerRadius: 0.5,
      label: {
        show: true,
        radius: 2 / 3,
        formatter: labelFormatter,
        threshold: 0.1,
      },
    },
  },
  legend: {
    show: false,
  },
};
function labelFormatter(label, series) {
  return (
    '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">' +
    label +
    "<br>" +
    Math.round(series.percent) +
    "%</div>"
  );
}

const DonutChart = () => {
  useEffect(() => {
    $.plot("#donut-chart", donutData, options);
  }, []);
  return <div style={{ height: "300px" }} id="donut-chart"></div>;
};

export default DonutChart;
