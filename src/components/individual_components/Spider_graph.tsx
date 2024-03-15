import React, { useState, useEffect } from "react";
import { RadarChart } from "@mantine/charts";
import { Badge, Table } from "@mantine/core";

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const combineDatasets = (datasets) => {
  const combinedCounts = {};

  datasets.forEach((data, index) => {
    data.forEach(({ status, count }) => {
      if (!combinedCounts[status]) {
        combinedCounts[status] = {};
      }
      combinedCounts[status][`count_pit_${index + 1}`] = count;
    });
  });

  return Object.keys(combinedCounts).map((status) => ({
    status,
    ...combinedCounts[status],
  }));
};

const Spider_graph = ({ datasets }) => {
  const [usedColors, setUsedColors] = useState([]);

  useEffect(() => {
    // Generate unique colors for each dataset
    const uniqueColors = [];
    datasets.forEach(() => {
      let color;
      do {
        color = getRandomColor();
      } while (uniqueColors.includes(color));
      uniqueColors.push(color);
    });
    setUsedColors(uniqueColors);
  }, [datasets]);

  const combinedData = combineDatasets(datasets);

  const series = datasets.map((_, index) => ({
    name: `count_pit_${index + 1}`,
    color: usedColors[index],
    strokeColor: usedColors[index],
    opacity: 0.2,
  }));

  const legendData = usedColors.map((color, index) => ({
    color: color,
    label: `pit ${index + 1}`,
  }));

  return (
    <div>
      <RadarChart
        h={300}
        data={combinedData}
        dataKey="status"
        withPolarRadiusAxis
        series={series}
      />
      <Table>
        <Table.Tbody>
          {legendData.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td>
                <Badge color={item.color} />
              </Table.Td>
              <Table.Td>{item.label}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default Spider_graph;
