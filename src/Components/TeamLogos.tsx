import React, { useState } from "react";

import redbullLogo from "../Images/redBullLogo.png";
import ferrariLogo from "../Images/ferrariLogo.png";
import mercedesLogo from "../Images/mercedes.png";
import alfaromeoLogo from "../Images/arLogo.png";
import alphatauriLogo from "../Images/atLogo.png";
import astonmartinLogo from "../Images/amLogo.png";
import haasLogo from "../Images/haasLogo.png";
import williamsLogo from "../Images/williamsLogo.png";
import mclarenLogo from "../Images/mclarenLogo.png";
import alpineLogo from "../Images/alpineLogo.png";
import { SProps as SProps } from "../App";

/*interface Props {
  teams: string;
}*/

const teamLogos = {
  red_bull: redbullLogo,
  ferrari: ferrariLogo,
  mercedes: mercedesLogo,
  alfa: alfaromeoLogo,
  alphatauri: alphatauriLogo,
  aston_martin: astonmartinLogo,
  haas: haasLogo,
  williams: williamsLogo,
  mclaren: mclarenLogo,
  alpine: alpineLogo,
};

const TeamLogos = (props: string) => {
  return (
    <>
      <div className="teamLogos">
        <h1>TeamLogos</h1>
      </div>
    </>
  );
};

export default TeamLogos;
