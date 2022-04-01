import React, { useState } from "react";

/*import red_bull from "../Images/redBullLogo.png";
// import ferrari from "../Images/ferrariLogo.png";
import mercedes from "../Images/mercedes.png";
import alfa from "../Images/arLogo.png";
import alphatauri from "../Images/atLogo.png";
import aston_martin from "../Images/amLogo.png";
import haas from "../Images/haasLogo.png";
import williams from "../Images/williamsLogo.png";
import mclaren from "../Images/mclarenLogo.png";
import alpine from "../Images/alpineLogo.png";*/
import { workerData } from "worker_threads";

interface Props {
  teams: string;
}

// const teamLogos = [ferrari, alfa, alpine];

/*const teamLogos = {
  red_bull: red_bull,
  // ferrari: ferrari,
  mercedes: mercedes,
  alfa: alfa,
  alphatauri: alphatauri,
  aston_martin: aston_martin,
  haas: haas,
  williams: williams,
  mclaren: mclaren,
  alpine: alpine,
};*/

const TeamLogos = ({ teams }: Props) => {
  let teampath: string = teams + ".png";
  return (
    <>
      <img src={process.env.PUBLIC_URL + teampath} alt="Team Logo" />
    </>
  );
};

export default TeamLogos;
