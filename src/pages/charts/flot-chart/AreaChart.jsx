import React, { useEffect } from "react";
import "flot/dist/es5/jquery.flot";

const $ = window.$;

const AreaChart = () => {
  useEffect(() => {
    var areaData = [
      [2, 88.0],
      [3, 93.3],
      [4, 102.0],
      [5, 108.5],
      [6, 115.7],
      [7, 115.6],
      [8, 124.6],
      [9, 130.3],
      [10, 134.3],
      [11, 141.4],
      [12, 146.5],
      [13, 151.7],
      [14, 159.9],
      [15, 165.4],
      [16, 167.8],
      [17, 168.7],
      [18, 169.5],
      [19, 168.0],
    ];
    $.plot("#area-chart", [areaData], {
      grid: {
        borderWidth: 0,
      },
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: "#00c0ef",
        lines: {
          fill: true, //Converts the line chart to area chart
        },
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        show: false,
      },
    });
  }, []);
  return <div style={{ height: "300px" }} id="area-chart"></div>;
};

export default AreaChart;
