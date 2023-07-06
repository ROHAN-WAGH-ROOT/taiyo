import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import React from "react";
Chart.register(CategoryScale);
const LineChart = ({ dates, casesValue, deathsValue, recoveredValue }: any) => {
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Cases",
        data: casesValue,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Deaths",
        data: deathsValue,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Recovered",
        data: recoveredValue,
        borderColor: "green",
        fill: false,
      },
    ],
  };

  const options: any = {
    indexAxis: "x",
    scales: {
      x: {
        type: "category",
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
