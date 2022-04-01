import React from "react";
import Teams from "./TeamPages/TeamSelect";
import { SProps as SProps } from "../App";

interface Props {
  teams: string[];
}

const Home = ({ teams }: Props) => {
  return (
    <>
      <div>
        <main id="main">
          Welcome to the home page.
          {/* <Teams /> */}
        </main>
      </div>
    </>
  );
};

export default Home;
