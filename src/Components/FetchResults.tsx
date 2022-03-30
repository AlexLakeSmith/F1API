import React, { useState, useEffect } from "react";
import { Races, Results } from "../Interfaces/RaceResultsInterface";
import { DriverData } from "../Interfaces/DriversInterface";
import axios, { AxiosResponse } from "axios";
import "../Styles/App.css";

// Correctly fetching driver race results.
interface Props {
  race: string;
}

const FetchResults = ({ race }: Props) => {
  // For driver results.
  const [driverData, setDriverData] = useState<Results[]>([]);
  // For race information.
  const [raceData, setRaceData] = useState<Races[]>([]);
  console.log("This is the race data", raceData);

  useEffect(() => {
    axios.get<DriverData[]>(race).then((response: AxiosResponse) => {
      setDriverData(response.data.MRData.RaceTable.Races[0].Results);
      setRaceData(response.data.MRData.RaceTable.Races);
    });
  }, []);

  const RaceInfo = () => {
    return (
      <>
        {raceData.map((race) => (
          <div>
            <h2>
              Results from the {race.season} {race.raceName}
            </h2>
            <p>Race Date: {race.date}</p>
            <p>Circuit: {race.Circuit.circuitName}</p>
          </div>
        ))}
      </>
    );
  };

  const DisplayResults = () => {
    return (
      <>
        <div className="table">
          {driverData.map((driver) => (
            <div className="eachDriver">
              <tr key={driver.Driver.code}>
                <th>Placing</th>
                <th>Number</th>
                <th>Driver Name</th>
                <th>Constructor</th>
                <th>Status</th>
                <th>Points Gained</th>
              </tr>
              <tr>
                <td>{driver.positionText}</td>
                <td>{driver.number}</td>
                <td>
                  {driver.Driver.givenName} {driver.Driver.familyName}
                </td>
                <td>{driver.Constructor.name}</td>
                <td>{driver.status}</td>
                <td>{driver.points}</td>
              </tr>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="background">
        <RaceInfo />
        <DisplayResults />
      </div>
    </>
  );
};

export default FetchResults;
