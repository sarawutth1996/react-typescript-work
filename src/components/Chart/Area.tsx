import React from "react";
import Chart from "react-apexcharts";

function ChartArea() {
  const options: object = {
    title: {
      text: "Chart Area",
      align: "left",
      style: {
        fontSize: "24px",
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      show: true,
      min: 0,
      max: 100,
    },
    dataLabels: {
      enabled: true,
    },
    colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560'],
    // น้ำเงิน , เขียว , เหลือง , แดง
    chart: {
      toolbar: {
        show: true,
        offsetX: -12,
        offsetY: 12,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
        },
      },
    },
    noData: {
      text: "no validation",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: undefined,
        fontSize: "24px",
        fontFamily: undefined,
      },
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "16px",
      fontFamily: "Helvetica, Arial",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 8,
      itemMargin: {
        horizontal: 16,
        vertical: 16,
      },
    },
  };

  const series = [
    {
        name: "เก็บเกี่ยวจริง",
        data: [30, 40, 25, 50, 49, 21, 70, 51],
      },
    {
      name: "เก็บเกี่ยวจริงสะสม",
      data: [23, 12, 54, 61, 32, 56, 81, 19],
    },
    {
      name: "คาดการณ์",
      data: [24, 20, 5, 75, 42, 79, 72, 35],
    },
    {
      name: "แผน",
      data: [80, 13, 5, 5, 23, 42, 30, 15],
    },
  ];

  return <Chart options={options} series={series} type="area" width="100%" />;
}

export default ChartArea;
