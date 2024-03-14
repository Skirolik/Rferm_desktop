import React from "react";
import Details from "../Details";
import Home from "../Home";
import Settings from "../Settings";
import Login from "../Login";
import { Routes, Route } from "react-router-dom";

const RouterSwitcher = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RouterSwitcher;
