import { Card, Grid, Text } from "@mantine/core";
import React, { useEffect } from "react";
import "./assets/ManavLogo2021.png";
import { useLocation, useParams } from "react-router-dom";
import PccComponent from "./components/PccComponent";
import SccComponent from "./components/SccComponent";
import CccComponent from "./components/CccComponent";
import {
  getTextColor,
  hexToRgb,
} from "../src/components/individual_components/utils";

const Home = ({ back }) => {
  const location = useLocation();
  console.log("color in home", back);
  const { state } = location;
  const username = localStorage.getItem("user");
  console.log("username", username);

  return (
    <div className="App" style={{ marginTop: 10 }}>
      <Text ta="center" fw={800} fz="xl" td="underline" c={getTextColor(back)}>
        Welcome, {username || "Guest"}!
      </Text>
      <CccComponent />
    </div>
  );
};

export default Home;
