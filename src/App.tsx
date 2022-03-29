import React, { useEffect, useState } from "react";
import "./Styles/App.css";
import { DriverData, Drivers } from "./Interfaces/DriversInterface";
import axios, { AxiosResponse } from "axios";
import Routing from "./Components/Routing";

function App() {
  return (
    <>
      <div className="App">
        <strong>Alex's F1 API Project</strong>
      </div>
      <Routing />
    </>
  );
}

export default App;
