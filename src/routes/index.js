import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import LandingPage from "../pages/landingpage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />]
      </Routes>
    </>
  );
};

export default Router;
