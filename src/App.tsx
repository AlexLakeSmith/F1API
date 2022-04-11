import "./Styles/App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import InnerContent from "./Components/InnerContent";
import RaceOne from "./Components/RaceOne";
import RaceTwo from "./Components/RaceTwo";
import RaceResults from "./Components/RaceResults";
import Home from "./Components/Home";
import TeamSelect from "./Components/TeamPages/TeamSelect";
import Ferrari from "./Components/TeamPages/Ferrari";
import FetchDrivers from "./Components/FetchDrivers";
import { DriverContext } from "./Components/DriverContext"; 

import { useState } from "react";

export const selectedTeam = "";

export interface SProps {
  teams: string[];
}

function App() {
  const [message, setMessage] = useState("initial");

  const teams = [
    "red_bull",
    "ferrari",
    "alfa",
    "alpine",
    "haas",
    "alphatauri",
    "aston_martin",
    "mercedes",
    "mclaren",
    "williams",
  ];

  const teamDrivers = [
    { team_id: "ferrari", driver1: "LEC", driver2: "SAI" },
    { team_id: "red_bull", driver1: "VER", driver2: "PER" },
    { team_id: "alfa", driver1: "BOT", driver2: "ZHO" },
    { team_id: "alpine", driver1: "ALO", driver2: "OCO" },
    { team_id: "haas", driver1: "MAG", driver2: "MSC" },
    { team_id: "alphatauri", driver1: "GAS", driver2: "TSU" },
    { team_id: "aston_martin", driver1: "VET", driver2: "STR" },
    { team_id: "mercedes", driver1: "HAM", driver2: "RUS" },
    { team_id: "mclaren", driver1: "NOR", driver2: "RIC" },
    { team_id: "williams", driver1: "ALB", driver2: "LAT" },
  ];

  return (
    <>
      <div className="App">
        <div className="headbar">
          <strong className="mainTitle">Alex's F1 API Project</strong>
          <p>
            <a href="/teams">Teams</a>
          </p>
          <p>
            <a href="/raceresults">Results</a>
          </p>
          <p>{message}</p>
        </div>
      </div>
      <div>
        <DriverContext.Provider value={{message, setMessage}}>
          <Routes>
            {/* <Route path="/" element={<InnerContent />} /> */}
            {/* Navigate default path to homepage. */}
            <Route path="/" element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home teams={teams} />} />
            <Route path="drivers" element={<FetchDrivers />} />

            <Route path="/teams" element={<TeamSelect teamsList={teams} />} />
            {/* Currently have to make individual team pages. I would like to be able to rerender 1 page. dependent on what I pick. */}
            <Route path="/ferrari" element={<Ferrari />} />

            {/* Nested routes for race results... */}
            <Route path="/raceresults" element={<RaceResults />}>
              <Route path="round1" element={<RaceOne />} />
              <Route path="round2" element={<RaceTwo />} />
              {/* </Route> */}
            </Route>
          </Routes>
        </DriverContext.Provider>
      </div>
    </>
  );
}

export default App;
