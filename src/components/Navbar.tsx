import React from "react";
import {
  AppShell,
  NavLink,
  ScrollArea,
  Button,
  Center,
  Text,
  useMantineColorScheme,
  useComputedColorScheme,
  Avatar,
  Image,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconSettings,
  IconDetails,
  IconHome,
  IconPower,
} from "@tabler/icons-react";
import "./navbar_module.css";

const Navbar = ({ Onlogout }) => {
  const isLargeScreen = useMediaQuery("(min-width: 800px)");
  const username = localStorage.getItem("user");
  const navigate = useNavigate();
  const computedColorScheme = useComputedColorScheme("light");
  const { colorScheme } = useMantineColorScheme();

  console.log("color", colorScheme);
  const handleLogoutClick = () => {
    Onlogout();
  };
  return (
    <AppShell.Navbar>
      {isLargeScreen ? <></> : <AppShell.Section> </AppShell.Section>}

      <AppShell.Section mt="xl">
        {" "}
        <Image
          // height="100%"
          width="5%"
          src="../../src/assets/ManavLogo2021.png"
        />{" "}
      </AppShell.Section>
      <AppShell.Section component={ScrollArea} my="md" scrollbars="y" mt="xl">
        <NavLink
          key="Home"
          className={`NavLink-custom ${
            colorScheme === "light" ? "light" : "dark"
          }`}
          label={
            <div style={{ textAlign: "center" }}>
              <IconHome
                width={20}
                height={20}
                style={{ marginBottom: "5px" }}
              />
              <Text size="sm" style={{ lineHeight: "1", fontSize: "0.8em" }}>
                Home
              </Text>
            </div>
          }
          onClick={() => navigate("../")}
        />
        <NavLink
          key="Detials"
          className={`NavLink-custom ${
            colorScheme === "light" ? "light" : "dark"
          }`}
          label={
            <div style={{ textAlign: "center" }}>
              <IconDetails
                width={20}
                height={20}
                style={{ marginBottom: "5px" }}
              />
              <Text size="sm" style={{ lineHeight: "1", fontSize: "0.8em" }}>
                Details
              </Text>
            </div>
          }
          onClick={() => navigate("../details")}
        />
        <NavLink
          key="Settings"
          className={`NavLink-custom ${
            colorScheme === "light" ? "light" : "dark"
          }`}
          label={
            <div style={{ textAlign: "center" }}>
              <IconSettings
                width={20}
                height={20}
                style={{ marginBottom: "5px" }}
              />
              <Text size="sm" style={{ lineHeight: "1", fontSize: "0.8em" }}>
                Settings
              </Text>
            </div>
          }
          onClick={() => navigate("../settings")}
        />
      </AppShell.Section>
      <div style={{ position: "absolute", bottom: 30, width: "100%" }}>
        <AppShell.Section mt="xl">
          <Center>
            <Avatar color="teal" radius="xl" mt="xl">
              {username && username.charAt(0).toUpperCase()}
            </Avatar>
          </Center>
          <Center mt="xl">
            <Button
              variant="light"
              color="red"
              size="compact-md"
              onClick={handleLogoutClick}
            >
              <IconPower stroke={2} />
            </Button>
          </Center>
        </AppShell.Section>
      </div>
    </AppShell.Navbar>
  );
};

export default Navbar;
