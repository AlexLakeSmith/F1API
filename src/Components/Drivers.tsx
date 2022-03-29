import React from "react";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { DriverData, Drivers } from "../Interfaces/DriversInterface";

const DriversPage = () => {
  const [driverData, setDriverData] = useState<Drivers[]>([]);

  useEffect(() => {
    axios
      .get<DriverData[]>("https://ergast.com/api/f1/2022/drivers.json")
      .then((response: AxiosResponse) => {
        setDriverData(response.data.MRData.DriverTable.Drivers);
      });
  }, []);

  const DisplayResults = () => {
    return (
      <>
        <div className="driversTableData">
          <tr>
            <th>Name</th>
          </tr>

          {driverData.map((driver) => (
            <div className="eachDriver">
              <tr key={driver.driverId}>
                <td className="firstName">{driver.givenName}</td>
                <td className="lastName">{driver.familyName}</td>
              </tr>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <div>This is the drivers page</div>
      <DisplayResults />
    </>
  );
};

export default DriversPage;
