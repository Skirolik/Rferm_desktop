import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {
  AppShell,
  Tooltip,
  useMantineColorScheme,
  useComputedColorScheme,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconColorSwatch } from "@tabler/icons-react";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import Navbar from "./components/Navbar";
import RouterSwitcher from "./components/RouterSwitcher";
import Login from "./Login";
import Color_Swatch from "./components/Color_Swatch";

import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#172B4D");
  const [modalOpened, setModalOpened] = useState(false);
  console.log(backgroundColor);

  const getTextColor = (bgColor) => {
    // Convert the background color to RGB
    const rgb = hexToRgb(bgColor);
    // Calculate brightness using a standard formula
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    // Choose text color based on brightness
    return brightness > 128 ? "#000000" : "#FFFFFF";
  };

  const hexToRgb = (hex) => {
    // Remove the hash if it's present
    hex = hex.replace(/^#/, "");
    // Parse the hex values into RGB components
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const handleLogin = (userName) => {
    setLoggedIn(true);
    setUser(userName);
    localStorage.setItem("user", userName);
    navigate("/", { state: { user: userName } });
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    setUser("");
    navigate("/login");
  };
  useEffect(() => {
    if (!loggedIn) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setLoggedIn(true);
        setUser(storedUser);
      }
    }
  }, [loggedIn]);

  return (
    <div className="App" style={{ width: "100%" }}>
      <AppShell
        padding="md"
        navbar={{
          width: 80,
        }}
      >
        {loggedIn ? (
          <>
            <Navbar Onlogout={handleLogout} />
            <AppShell.Main
              style={{
                background:
                  computedColorScheme === "dark"
                    ? `linear-gradient(to bottom, ${backgroundColor} 10%, #1e1e1e 60%)`
                    : backgroundColor,
              }}
            >
              <Tooltip label="Select Color">
                <IconColorSwatch
                  stroke={2}
                  width={30}
                  height={30}
                  onClick={() => setModalOpened(true)}
                  style={{
                    cursor: "pointer",
                    marginLeft: "20px",
                    color: getTextColor(backgroundColor),
                  }}
                />
              </Tooltip>

              <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
                <Color_Swatch onSelect={setBackgroundColor} />
              </Modal>
              <RouterSwitcher back={backgroundColor} />
            </AppShell.Main>
          </>
        ) : (
          <AppShell.Main>
            <Login onLogin={handleLogin} />
          </AppShell.Main>
        )}
      </AppShell>
    </div>
  );
}

export default App;
