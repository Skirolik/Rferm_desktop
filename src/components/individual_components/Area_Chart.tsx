import React from "react";
import Chart from "react-apexcharts";
import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";

const Apex_Chart = ({ data }) => {
  console.log("data for chart", data);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const options = {
    legend: {
      show: true,
      labels: {
        colors: "yellow",
      },
    },
    markers: {
      size: 2,
      colors: undefined,
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    chart: {
      toolbar: {
        show: true,

        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "date",
      labels: {
        style: {
          color: computedColorScheme === "dark" ? "#fff" : "000",
        },
      },
      title: {
        text: "Date",
        style: {
          color: computedColorScheme === "dark" ? "#fff" : "000",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: computedColorScheme === "dark" ? "#fff" : "000",
        },
      },
      title: {
        text: "Value",
        style: {
          color: computedColorScheme === "dark" ? "#fff" : "000",
        },
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: data.map(({ Date, value }) => ({ x: Date, y: value })),
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default Apex_Chart;
