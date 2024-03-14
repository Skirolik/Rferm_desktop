import { Group, Paper, SimpleGrid, Text } from "@mantine/core";
import React from "react";

const IndividualCard = ({ color, data }) => {
  console.log("data", data);
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      style={{ borderLeft: `6px solid ${color}` }}
    >
      <Text c="dimmed" fw={700} size="md">
        {data.decription}
      </Text>
      <Group justify="space-between">
        <Text c={color} fw={700} size="xl" style={{ fontSize: "2.5rem" }}>
          {data.value}
        </Text>
      </Group>
      <Group justify="flex-start">
        <Text ta="center" fw={700} tt="uppercase">
          {data.title}
        </Text>
      </Group>
    </Paper>
  );
};

const CommonCards = ({ data }) => {
  const colors = ["#c51d31", "#d14d14", "#24782c", "#1dbac5"];

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
      {colors.map((color, index) => (
        <IndividualCard key={index} color={color} data={data[index]} />
      ))}
    </SimpleGrid>
  );
};

export default CommonCards;
