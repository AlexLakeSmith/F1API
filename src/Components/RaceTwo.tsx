import React, { useState, useEffect } from "react";
import FetchResults from "./FetchResults";

const RaceTwo = () => {
  return (
    <>
      <FetchResults race="https://ergast.com/api/f1/2022/2/results.json" />
    </>
  );
};

export default RaceTwo;
