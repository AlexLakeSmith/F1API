import React from "react";
import { Route, Routes } from "react-router-dom";
import Drivers from "./Drivers";
import InnerContent from "./InnerContent";
import RaceOne from "./RaceOne";
import RaceTwo from "./RaceTwo";
import RaceResults from "./RaceResults";

//First we wrap our whole application in BrowserRouter
//then inside the Routes wrapper we just path our pages
// We are wrapping drivers and raceresults as children routes therefore we need to use Outlet on our InnerContent component to render them..
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<InnerContent />}>
          <Route path="/drivers" element={<Drivers />} />

          {/* Nested routes */}
          <Route path="/raceresults" element={<RaceResults />}>
            <Route path="round1" element={<RaceOne />} />
            <Route path="round2" element={<RaceTwo />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
