import React, { useState } from "react";
import TeamLogos from "../TeamLogos";

interface Props {
  teamsList: string[];
}

// From here...
// 1. Create the logos component, link the images to each image, further link each image to their own page.
// 2. Create one teams page? Passing the team name that needs to be displayed as a prop and then can display constructor information.
const TeamSelect = ({ teamsList }: Props) => {
  /*const RenderImages = () => {
    {
      teamsList.map((team, index) => console.log(team, index));
    }

    return null;
  };*/

  return (
    <>
      {teamsList.map((team, index) => (
        <div className="logoContainer">
          <TeamLogos teams={team} />
        </div>
      ))}
    </>
  );
};

export default TeamSelect;
