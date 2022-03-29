import React, { useState, useEffect } from "react";
import { DriverData, Drivers } from "../Interfaces/DriversInterface";
import { Races, Results } from "../Interfaces/RaceResultsInterface";
import axios, { AxiosResponse } from "axios";

const RaceTwo = () => {
  const [raceData, setRaceData] = useState<Races[]>([]);
  const [driverData, setDriverData] = useState<Results[]>([]);
  console.log("Information on Races state val ", raceData);
  console.log("Driver results state val ", driverData);

  useEffect(() => {
    axios
      .get<DriverData[]>("https://ergast.com/api/f1/2022/1/results.json")
      .then((response: AxiosResponse) => {
        //  console.log(response.data);
        setRaceData(response.data.MRData.RaceTable.Races);
        setDriverData(response.data.MRData.RaceTable.Races.Results);
      });
  }, []);

  const DisplayResults = () => {
    return (
      <>
        {driverData.map((driver) => (
          <div className="eachDriver">
            <tr key={driver.number}>
              <h1>{driver.number}</h1>
              {/* <td className="firstName">{d.season}</td> */}
              {/* <td className="lastName">{race.date}</td> */}
            </tr>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div>Displayed below is race result info</div>
      {/* <DisplayResults /> */}
    </>
  );
};

export default RaceTwo;

/* {driverResultData?.map((driver) => (
          <div className="eachDriver">
            <tr key={driver.Driver.code}>
              <td className="firstName">{driver.Driver.givenName}</td>
              <td className="lastName">{driver.Driver.familyName}</td>
            </tr>
        ));
      }*/
