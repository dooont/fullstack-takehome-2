import React from "react";
import ReactApexChart from "react-apexcharts";
import "./CandlestickChart.css";

const CandlestickChart = () => {
  const series = [
    {
      data: [
        {
          x: new Date("2023-08-16").getTime(),
          y: [26650.6, 26660.6, 26640.6, 26660.6],
        },
        {
          x: new Date("2023-08-17").getTime(),
          y: [26655.6, 26675.6, 26650.6, 26670.6],
        },
        {
          x: new Date("2023-08-18").getTime(),
          y: [26660.6, 26680.6, 26640.6, 26650.6],
        },
        {
          x: new Date("2023-08-19").getTime(),
          y: [26640.6, 26650.6, 26630.6, 26645.6],
        },
      ],
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (val) {
          return new Date(val).toLocaleDateString();
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    annotations: {
      points: [
        {
          x: new Date("2023-08-16").getTime(),
          y: 26660.6,
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeColor: "#4BC2A3",
            shape: "circle",
          },
          label: {
            text: "🚀",
            borderColor: "transparent",
            style: {
              color: "#000",
              fontSize: "16px",
            },
          },
        },
        {
          x: new Date("2023-08-17").getTime(),
          y: 26660.6,
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeColor: "#FF4560",
            shape: "circle",
          },
          label: {
            text: "😭",
            borderColor: "transparent",
            style: {
              color: "#000",
              fontSize: "16px",
            },
          },
        },
        {
          x: new Date("2023-08-18").getTime(),
          y: 26650.6,
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeColor: "#775DD0",
            shape: "circle",
          },
          label: {
            text: "😡",
            borderColor: "transparent",
            style: {
              color: "#000",
              fontSize: "16px",
            },
          },
        },
        {
          x: new Date("2023-08-19").getTime(),
          y: 26645.6,
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeColor: "#FEB019",
            shape: "circle",
          },
          label: {
            text: "😱",
            borderColor: "transparent",
            style: {
              color: "#000",
              fontSize: "16px",
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};

export default CandlestickChart;
