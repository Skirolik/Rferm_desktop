import { Badge, Paper, Table, Text } from "@mantine/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Recent_table = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case "Fault":
        return "#1dbac5";
      case "Warning":
        return "#d14d14";
      case "Danger":
        return "#c51d31";
      case "Battery-low":
        return "#24782c";
    }
  };
  const linkStyles = {
    color: "#206AD2",
    textDecoration: "underline",
  };

  const hoverStyles = {
    color: "darkblue",
  };

  const handleRowClick = () => {
    navigate("/detail");
  };

  return (
    <Paper withBorder p="md" radius="md" mt="xl">
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        {/* <Table stickyHeader>
          <Table.Tbody>
            {data.map((row, index) => (
              <Table.Tr key={index}>
                <Table.Td>{row.Date}</Table.Td>
                <Table.Td c={getStatusColor(row.status)} fw={600}>
                  {row.status}
                </Table.Td>
                <Table.Td>{row.Area}</Table.Td>
                <Table.Td
                  c="#206AD2"
                  td="underline"
                  onClick={handleRowClick}
                  style={{ cursor: "pointer" }}
                >
                  {row.pitname}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table> */}
        {data.map((row, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <Text mt="lg" size="lg" ml="sm">
              On {row.Date}, {row.status} occurred in Area: {row.Area} in{" "}
              <RouterLink to="/details" style={linkStyles} className="link">
                {row.pitname}
              </RouterLink>
            </Text>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default Recent_table;
