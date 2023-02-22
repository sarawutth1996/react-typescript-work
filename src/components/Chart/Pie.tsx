import React from "react";
import Chart from "react-apexcharts";

type Props = {};

function ChartPie({}: Props) {
  const series = [44, 55, 13, 43, 22];

  const options = {
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: "top",
          },
        },
        
      },
    ],
  };

  return <Chart options={options} series={series} type="pie" width="100%" />;
}

export default ChartPie;
