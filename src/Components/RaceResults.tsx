import React from "react";
import { Outlet } from "react-router-dom";

const RaceResults = () => {
  return (
    <>
      <h2>
        <a href="/raceresults/round1">Race 1 Results</a>
      </h2>
      <h2>
        <a href="/raceresults/round2">Race 2 Results</a>
      </h2>
      <Outlet />
    </>
  );
};

export default RaceResults;
