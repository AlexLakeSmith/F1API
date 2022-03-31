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
import { workerData } from "worker_threads";

interface Props {
  teams: string[];
}

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

const TeamLogos = ({ teams }: Props) => {
  const RenderLogos = () => {
    return (
      <>
        {/* <img src={redbullLogo} alt="" className="redbull" /> */}
        <div className="bothContainers">
          <div className="logoContainer1">
            <img src={redbullLogo} alt="" className="redbull" />
            <img src={ferrariLogo} alt="" className="redbull" />
            <img src={mercedesLogo} alt="" className="mercedes" />
            <img src={alfaromeoLogo} alt="" className="redbull" />
            <img src={alphatauriLogo} alt="" className="redbull" />
          </div>
          <div className="logoContainer2">
            <img src={astonmartinLogo} alt="" className="redbull" />
            <img src={haasLogo} alt="" className="haas" />
            <img src={williamsLogo} alt="" className="redbull" />
            <img src={mclarenLogo} alt="" className="redbull" />
            <img src={alpineLogo} alt="" className="redbull" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="teamLogos">
        <RenderLogos />
      </div>
    </>
  );
};

export default TeamLogos;
