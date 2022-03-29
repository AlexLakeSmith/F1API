import React from "react";
import { Outlet } from "react-router-dom";

const RaceResults = () => {
  return (
    <>
      <h1>Race Results</h1>
      <Outlet />
    </>
  );
};

export default RaceResults;
