import React, { useState, useEffect } from "react";
import FetchResults from "./FetchResults";

const RaceOne = () => {
  return (
    <>
      <FetchResults race="https://ergast.com/api/f1/2022/1/results.json" />
    </>
  );
};
export default RaceOne;
