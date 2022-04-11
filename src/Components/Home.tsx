import React from "react";
import Teams from "./TeamPages/TeamSelect";
import { SProps as SProps } from "../App";

interface Props {
  teams: string[];
}

const Home = ({ teams }: Props) => {
  return (
    <>
      <div className="home">
        <main id="main">
          <h2>Click on the above links to view results or teams</h2>
          {/* <Teams /> */}
        </main>
      </div>
    </>
  );
};

export default Home;
