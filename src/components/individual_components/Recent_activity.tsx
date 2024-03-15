import {
  Checkbox,
  Grid,
  Paper,
  Text,
  Stack,
  Flex,
  Button,
  Table,
} from "@mantine/core";
import React, { useState } from "react";
import { bop } from "./bop";
import { bop2 } from "./bop2";
import { bop3 } from "./bop3";
import { bop4 } from "./bop4";
import { recent_data } from "./recent_data";
import Spider_graph from "./Spider_graph";
import Recent_table from "./Recent_table";
import { DatePickerInput } from "@mantine/dates";

export const Recent_activity = () => {
  const [selectedDatasets, setSelectedDatasets] = useState([bop]);
  const [sendData, setSendData] = useState([bop]);

  const handleDatasetSelection = (dataset) => {
    if (selectedDatasets.includes(dataset)) {
      setSelectedDatasets(selectedDatasets.filter((item) => item !== dataset));
    } else {
      setSelectedDatasets([...selectedDatasets, dataset]);
    }
  };

  const handleSubmit = () => {
    console.log("Button submit clicked");
    setSendData(selectedDatasets);
    console.log("data i try to send", sendData);
  };

  const datasets = [bop, bop2, bop3, bop4];

  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 1, lg: 5 }}>
        <Text fw={700} ta="center" td="underline">
          Recent Activity
        </Text>
        <Recent_table data={recent_data} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 1, lg: 7 }}>
        <Text fw={700} ta="center" td="underline">
          Pit Data
        </Text>

        <Grid mt="xl">
          <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
          <Grid.Col span={{ base: 12, md: 1, lg: 4 }}>
            <Grid>
              {/* Left column */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Table>
                  <Table.Thead>
                    <Table.Td>Select</Table.Td>
                    <Table.Td>Name</Table.Td>
                  </Table.Thead>
                  <Table.Tbody>
                    {datasets.map((dataset, index) => (
                      <Table.Tr key={index}>
                        <Table.Td>
                          <Checkbox
                            key={index}
                            checked={selectedDatasets.includes(dataset)}
                            onChange={() => handleDatasetSelection(dataset)}
                            mt="md"
                          />
                        </Table.Td>
                        <Table.Td>{`Pit ${index + 1}`}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>

                <Button mt="xl" onClick={handleSubmit}>
                  Submit
                </Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 1, lg: 7 }}>
            <Spider_graph datasets={sendData} />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
