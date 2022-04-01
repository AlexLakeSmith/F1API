import "./Styles/App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Drivers from "./Components/Drivers";
import InnerContent from "./Components/InnerContent";
import RaceOne from "./Components/RaceOne";
import RaceTwo from "./Components/RaceTwo";
import RaceResults from "./Components/RaceResults";
import Home from "./Components/Home";
import TeamSelect from "./Components/TeamPages/TeamSelect";
import Ferrari from "./Components/TeamPages/Ferrari";

export interface SProps {
  teams: string[];
}

function App() {
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
        </div>
      </div>
      <div>
        <Routes>
          {/* <Route path="/" element={<InnerContent />} /> */}
          {/* Navigate default path to homepage. */}
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home teams={teams} />} />

          <Route path="/teams" element={<TeamSelect teamsList={teams} />} />
          {/* Currently have to make individual team pages. I would like to be able to rerender 1 page. dependent on what I pick. */}
          <Route path="/teams/ferrari" element={<Ferrari />} />

          {/* Nested routes for race results... */}
          <Route path="/raceresults" element={<RaceResults />}>
            <Route path="round1" element={<RaceOne />} />
            <Route path="round2" element={<RaceTwo />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
