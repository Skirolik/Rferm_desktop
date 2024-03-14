import React from "react";
import Common_cards from "./individual_components/Common_cards";
import { Donut_chart } from "./individual_components/Donut_chart";
import { Grid } from "@mantine/core";

const CccComponent = () => {
  const data = [
    { title: "Danger", value: 10, decription: "Scc Users" },
    { title: "unsafe", value: 20, decription: "Scc Users" },
    { title: "safe", value: 15, decription: "Scc Users" },
    { title: "Total", value: 45, decription: "Scc Users" },
  ];
  const pieChartData = [
    { name: "safe", value: 10 },
    { name: "unsafe", value: 15 },
    { name: "Danger", value: 5 },
  ];
  const pieChartColors = ["#c51d31", "#d14d14", "#24782c"];
  return (
    <>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 0.5 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 10, lg: 11 }}>
          <Common_cards data={data} />
          <Donut_chart data={pieChartData} colors={pieChartColors} />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 1, lg: 0.5 }}></Grid.Col>
      </Grid>
    </>
  );
};

export default CccComponent;
