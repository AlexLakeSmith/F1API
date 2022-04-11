import React, { useState, useContext } from "react";
import { workerData } from "worker_threads";
import selectedTeam from "../../App";
import { createGlobalState } from "react-hooks-global-state";
import { DriverContext } from "../DriverContext";

interface Props {
  teams: string;
}


const TeamLogos = ({ teams }: Props) => {
  let teampath: string = teams + ".png";
  let teamName: string = teams

  const context = useContext(DriverContext);
  const {message, setMessage} = context

  return (
    <>
      <div className="logoContainer">
        <a href={`/${teams}`} className="" onClick={() => setMessage("hello")}>
          <img
            src={process.env.PUBLIC_URL + teampath}
            alt={`/${teams} team logo`}
            className="logo"
          />
        </a>
      </div>
    </>
  );
};

export default TeamLogos;
