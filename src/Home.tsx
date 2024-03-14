import { Card, Grid, Text } from "@mantine/core";
import React, { useEffect } from "react";
import "./assets/ManavLogo2021.png";
import { useLocation, useParams } from "react-router-dom";
import PccComponent from "./components/PccComponent";
import SccComponent from "./components/SccComponent";
import CccComponent from "./components/CccComponent";

const Home = () => {
  const location = useLocation();
  const { state } = location;
  const username = localStorage.getItem("user");
  console.log("username", username);

  const renderContent = () => {
    switch (username) {
      case "admin":
        return <CccComponent />;
      case "Scc":
        return <SccComponent />;
      case "pcc":
        return <PccComponent />;
      default:
        return <Text>Default Content</Text>;
    }
  };
  return (
    <div className="App" style={{ marginTop: 10 }}>
      <Text ta="center" fw={800} fz="xl" td="underline">
        Welcome, {username || "Guest"}!
      </Text>
      {renderContent()}
    </div>
  );
};

export default Home;
