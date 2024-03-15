import { DonutChart } from "@mantine/charts";
import { Badge, Card, Grid, Paper, Table, Text } from "@mantine/core";
import React, { useState, useEffect } from "react";

export const Donut_chart = ({ data, colors, name }) => {
  const [centerText, setCenterText] = useState("");

  const coloredData = data.map((item, index) => ({
    ...item,
    color: colors[index] || "#000000",
  }));
  const legendData = coloredData.map((item) => ({
    value: item.name,
    color: item.color,
    data: item.value,
  }));
  const sum = legendData.reduce((total, item) => total + item.data, 0);

  const updateCenterText = (tooltipProps) => {
    const { payload } = tooltipProps;
    if (payload && payload.length > 0) {
      const { value, color } = payload[0].payload;
      const percentage = ((value / sum) * 100).toFixed(1);
      const newText = {
        percentage: `${percentage}%`,
        color: color,
      };

      // Check if the new text is different from the current centerText
      if (
        newText.percentage !== centerText.percentage ||
        newText.color !== centerText.color
      ) {
        // Update centerText after the component has finished rendering
        requestAnimationFrame(() => {
          setCenterText(newText);
        });
      }
    } else {
      // Update only if centerText is different from the sum
      if (centerText.percentage !== sum) {
        // Update centerText after the component has finished rendering
        requestAnimationFrame(() => {
          setCenterText({ percentage: sum, color: "#1dbac5" });
        });
      }
    }
  };

  useEffect(() => {
    const waitForTooltip = () => {
      const tooltipWrapper = document.querySelector(
        ".recharts-tooltip-wrapper"
      );
      if (tooltipWrapper) {
        tooltipWrapper.addEventListener("mouseenter", updateCenterText);
      } else {
        setTimeout(waitForTooltip, 100); // Retry after 100 milliseconds
      }
    };

    waitForTooltip();

    return () => {
      const tooltipWrapper = document.querySelector(
        ".recharts-tooltip-wrapper"
      );
      if (tooltipWrapper) {
        tooltipWrapper.removeEventListener("mouseenter", updateCenterText);
      }
    };
  }, []);

  return (
    <>
      <Paper withBorder p="md" radius="md">
        <Text
          mt="lg"
          mb="xl"
          ta="center"
          fw={700}
          td="underline"
          style={{ fontSize: "1.5rem" }}
        >
          {name}
        </Text>
        <Grid mt="xl">
          <div
            style={{
              position: "relative",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            <DonutChart
              data={coloredData}
              size={230}
              thickness={30}
              tooltipProps={{
                content: updateCenterText,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-28%, -50%)",
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <Text
                fw={700}
                style={{ color: centerText.color, fontSize: "2.5rem" }}
              >
                {centerText.percentage}
              </Text>
            </div>
          </div>

          <Grid.Col span={{ base: 12, sm: 4, md: 5, lg: 5 }} ml="md">
            <Table>
              <Table.Tbody>
                {legendData.map((item) => (
                  <Table.Tr key={item.value}>
                    <Table.Td style={{ paddingRight: "8px" }}>
                      <Badge color={item.color} />
                    </Table.Td>
                    <Table.Td>{item.value}</Table.Td>
                    <Table.Td style={{ width: "16px" }}></Table.Td>
                    <Table.Td>{item.data}</Table.Td>
                  </Table.Tr>
                ))}
                <Table.Tr>
                  <Table.Td style={{ paddingRight: "8px" }}></Table.Td>
                  <Table.Td>Total:</Table.Td>
                  <Table.Td style={{ width: "16px" }}></Table.Td>
                  <Table.Td>{sum}</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
};
