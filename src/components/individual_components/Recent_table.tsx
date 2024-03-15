import { Table } from "@mantine/core";
import React from "react";

const Recent_table = ({ data }) => {
  console.log("Table data", data);
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Message</Table.Th>
          <Table.Th>Area</Table.Th>
          <Table.Th>Pit Name</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row, index) => (
          <Table.Tr key={index}>
            <Table.Td>{row.Date}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default Recent_table;
