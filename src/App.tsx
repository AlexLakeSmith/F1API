import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DriverData, Drivers } from "./Interfaces/DriversInterface";
import axios, { AxiosResponse } from "axios";

function App() {
  // const [driverData, setDriverData] = useState<DriverData[]>([]);
  const [drivers, setDrivers] = useState<Drivers[]>([]);

  useEffect(() => {
    axios
      .get<DriverData[]>("https://ergast.com/api/f1/2022/drivers.json")
      .then((response: AxiosResponse) => {
        // console.log('1111', response.data);
        setDrivers(response.data.MRData.DriverTable.Drivers);
      });
  }, []);

  return (
    <>
      <div className="App">
        Welcome to my F1 API App
      </div>
      <tr>
        <th>Name</th>
      </tr>
    {/* {console.log({drivers})} */}
    {drivers.map((driver) => (
      <tr key={driver.driverId}>
        <td>{driver.driverId}</td>
      </tr>
    ))}
    </>
  )

}

export default App;
