import { DonutChart } from "@mantine/charts";
import { Group, Badge } from "@mantine/core";

import React from "react";

export const Donut_chart = ({ data, colors }) => {
  console.log("data i recive", data);
  const coloredData = data.map((item, index) => ({
    ...item,
    color: colors[index] || "#000000", // Use the provided color or fallback to black
  }));
  const legendData = coloredData.map((item) => ({
    value: item.name,
    color: item.color,
  }));
  console.log("colored Data", coloredData);
  return (
    <Group>
      <DonutChart
        data={coloredData}
        size={200}
        thickness={20}
        withLabels
        tooltipDataSource="segment"
      />
      <Group right={20} top={20}>
        {legendData.map((item) => (
          <div key={item.value} style={{ marginBottom: "8px" }}>
            <Badge color={item.color} style={{ marginRight: "8px" }} />
            {item.value}
          </div>
        ))}
      </Group>
    </Group>
  );
};
