import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Flex,
  AppShell,
  Burger,
  Button,
  Paper,
  Text,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import Navbar from "./components/Navbar";
import RouterSwitcher from "./components/RouterSwitcher";
import Login from "./Login";

import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

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
            <AppShell.Main>
              <RouterSwitcher />
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
