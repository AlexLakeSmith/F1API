import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DriverData } from "./Interfaces/DriversInterface";
import axios, { AxiosResponse } from "axios";

function App() {
  const [driverData, setDriverData] = useState<DriverData[]>([]);
  const drivers: DriverData[] = driverData;
  //console.log(drivers.MRData.DriverTable.Drivers);
  //console.log(driverData);

  useEffect(() => {
    axios
      .get<DriverData[]>("https://ergast.com/api/f1/2022/drivers.json")
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setDriverData(response.data);
      });
  }, []);

  const displayTable = () => {
    return (
      <>
        <body>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Nationality</th>
            <th>Birthdate</th>
          </tr>
          {console.log(driverData)}
          {driverData.MRData.DriverTable.Drivers.map((item, key) => (
            <tr key={key}>
              <td>{item.driverID}</td>
            </tr>
          ))}
        </body>
      </>
    );
  };

  return <div className="App">Welcome to my F1 API App</div>;
}

export default App;
