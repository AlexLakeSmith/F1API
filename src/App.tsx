import "./Styles/App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Drivers from "./Components/Drivers";
import InnerContent from "./Components/InnerContent";
import RaceOne from "./Components/RaceOne";
import RaceTwo from "./Components/RaceTwo";
import RaceResults from "./Components/RaceResults";
import Home from "./Components/Home";
import Teams from "./Components/Teams";

export interface SProps {
  teams: string;
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
            <a href="/raceresults/round1">Click to see Race 1 results</a>
          </p>
          <p>
            <a href="/raceresults/round2">Click to see Race 2 results</a>
          </p>
        </div>
      </div>
      <div>
        <Routes>
          {/* <Route path="/" element={<InnerContent />} /> */}
          {/* Navigate default path to homepage. */}
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home teams={teams} />} />
          <Route path="/teams" element={<Teams teamsList={teams} />} />
          {/* Nested routes */}
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
