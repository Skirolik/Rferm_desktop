import React from "react";
import Common_cards from "./individual_components/Common_cards";
import { Donut_chart } from "./individual_components/Donut_chart";
import { Recent_activity } from "./individual_components/Recent_activity";
import { Card, Grid, Text } from "@mantine/core";

const CccComponent = () => {
  const data = [
    { title: "Danger", value: 10, decription: "Pit Details" },
    { title: "unsafe", value: 20, decription: "Pit Details" },
    { title: "safe", value: 15, decription: "Pit Details" },
    { title: "Total Faults", value: 45, decription: "Pit Details" },
  ];
  const pieChartData = [
    { name: "Danger", value: 10 },
    { name: "Unsafe", value: 15 },
    { name: "Safe", value: 5 },
  ];
  const pieChartColors = ["#c51d31", "#d14d14", "#24782c"];
  return (
    <>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 0.5 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 10, lg: 11 }}>
          <Common_cards data={data} />
          <Grid mt="xl">
            <Grid.Col span={{ base: 12, md: 4, lg: 12 }}>
              <Card>
                <Recent_activity />
              </Card>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 1, lg: 0.5 }}></Grid.Col>
      </Grid>
    </>
  );
};

export default CccComponent;
