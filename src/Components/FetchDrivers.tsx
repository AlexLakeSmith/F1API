import React, { useState, useEffect, useContext } from "react";
import { Drivers, DriverData } from "../Interfaces/DriversInterface";
import axios, { AxiosResponse } from "axios";
import { DriverContext } from "./DriverContext";
interface Props {
  drivers: string;
}

const FetchDrivers = () => {
  // For driver data.
  const [driverData, setDriverData] = useState<Drivers[]>([]);
  console.log(driverData);

  const context = useContext(DriverContext);
const {message, setMessage} = context

  useEffect(() => {
    axios
      .get<DriverData[]>("https://ergast.com/api/f1/2022/drivers.json")
      .then((response: AxiosResponse) => {
        setDriverData(response.data.MRData.DriverTable.Drivers);
      });
  }, []);

  return (
    <>
      <div>Fetch drivers page</div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("changed")}></button>
    </>
  );
};

export default FetchDrivers;
