import React, { useState, useEffect } from "react";
import { DriverData } from "../Interfaces/DriversInterface";
import { Races, Results } from "../Interfaces/RaceResultsInterface";
import axios, { AxiosResponse } from "axios";
import FetchData from "./FetchDrivers";
import FetchResults from "./FetchResults";

export interface FetchRaceInfo {
  race: string;
  driver: string;
}

const RaceTwo = () => {
  return (
    <>
      <FetchResults race="https://ergast.com/api/f1/2022/2/results.json" />
    </>
  );
};

export default RaceTwo;
