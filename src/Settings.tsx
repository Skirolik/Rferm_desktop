import React from "react";
import {
  Flex,
  AppShell,
  Burger,
  Button,
  useMantineColorScheme,
  useComputedColorScheme,
  Text,
} from "@mantine/core";
import { FaSun, FaMoon } from "react-icons/fa";

const Settings = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    console.log("color change");
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="App" style={{ marginTop: 30 }}>
        <Text>
          Choose the default color mode:{" "}
          <Button
            size="sm"
            // variant="link"
            onClick={toggleColorScheme}
          >
            {computedColorScheme === "dark" ? <FaSun /> : <FaMoon />}
          </Button>
        </Text>
      </div>
    </>
  );
};

export default Settings;
