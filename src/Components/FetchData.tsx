import React, { useState, useEffect } from "react";
import RaceTwo from "./RaceTwo";
import { FetchRaceData, DriverData } from "../Interfaces/DriversInterface";
import { Races, Results } from "../Interfaces/RaceResultsInterface";
import axios, { AxiosResponse } from "axios";

const FetchData: React.FC<FetchRaceData> = (props: FetchRaceData) => {
  // Used to fetch information on the race such as name, location etc.
  /*const FetchRace: React.FC<FetchRaceData> = (props: FetchRaceData) => {  
    
    /*const [raceData, setRaceData] = useState<Races[]>([]);
    useEffect(() => {
      axios
        .get<DriverData[]>(props.race)
        .then((response: AxiosResponse) => {
          //  console.log(response.data);
          setRaceData(response.data.MRData.RaceTable.Races);
        });
    }, []);
    return (
      <>
        <div></div>
      </>
    );
  };*/

  const FetchResults: React.FC<FetchRaceData> = (props: FetchRaceData) => {
    return (
      <>
        <div>Hello</div>
      </>
    );
  };

  return <div>This is used to fetch </div>;
};

export default FetchData;
