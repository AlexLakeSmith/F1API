import React, { useState } from "react";
import TeamLogos from "./TeamLogos";

interface Props {
  teamsList: string[];
}

// From here...
// 1. Create the logos component, link the images to each image, further link each image to their own page.
// 2. Create one teams page? Passing the team name that needs to be displayed as a prop and then can display constructor information.
const TeamSelect = ({ teamsList }: Props) => {
  // Compact into a function.
  const RenderTeams = () => {
    return (
      <>
        <div className="teamSelect">
          {teamsList.map((team, index) => (
            <TeamLogos teams={team} />
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <RenderTeams />
    </>
  );
};

export default TeamSelect;
