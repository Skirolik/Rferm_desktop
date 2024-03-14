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
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { FaSun, FaMoon } from "react-icons/fa";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useNavigate } from "react-router-dom";

const HeaderMenu = ({ toggle }: any) => {
  const isLargeScreen = useMediaQuery("(min-width:800px");
  const navigate = useNavigate();
  const [opened] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  const toggleColorScheme = () => {
    console.log("color change");
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };

  return (
    <AppShell.Header>
      <Flex
        justify="space-between"
        align="center"
        style={{ padding: "10px 20px" }}
      >
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          aria-label="Toggle navigation"
        />
        <Flex
          mih={50}
          gap="lg"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {isLargeScreen ? (
            <>
              <MantineLogo size={30} cursor="pointer" />
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </AppShell.Header>
  );
};

export default HeaderMenu;
