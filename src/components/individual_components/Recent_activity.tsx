import { Grid, Paper } from "@mantine/core";
import React from "react";
import { bop } from "./bop";
import { bop2 } from "./bop2";
import { bop3 } from "./bop3";
import { bop4 } from "./bop4";
import { recent_data } from "./recent_data";
import Spider_graph from "./Spider_graph";
import Recent_table from "./Recent_table";

export const Recent_activity = () => {
  const datasets = [bop, bop2, bop3, bop4];
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 1, lg: 8 }} bg="blue">
        {" "}
        <Paper
          withBorder
          p="md"
          radius="md"
          style={{ borderLeft: `6px solid red` }}
        >
          <Recent_table data={recent_data} />
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 1, lg: 4 }} bg="blue">
        {" "}
        <Paper
          withBorder
          p="md"
          radius="md"
          style={{ borderLeft: `6px solid red` }}
        >
          <Spider_graph datasets={datasets} />
        </Paper>
      </Grid.Col>
    </Grid>
  );
};
