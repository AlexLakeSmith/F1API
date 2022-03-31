import React, { useState } from "react";
import { SProps as SProps } from "../App";
import TeamLogos from "./TeamLogos";

interface Props {
  teamsList: string[];
}

// From here...
// 1. Create the logos component, link the images to each image, further link each image to their own page.
// 2. Create one teams page? Passing the team name that needs to be displayed as a prop and then can display constructor information.
const Teams = ({ teamsList }: Props) => {
  const [teamData, setTeamData] = useState<String[]>(teamsList);

  const RenderImages = () => {
    /*let [indName, setIndName] = useState<String>("");
    return (
      <>
        {teamData.map(
          (team, index) => setIndName(team),
          console.log(indName)
          // <TeamLogos teams={team} />);
        )}
      </>
    );*/
  };

  return (
    <>
      <div>Teams</div>
      {/* <MapTeams /> */}
      {/* <RenderImages /> */}
      {/* <TeamLogos teams={teamsList} /> */}
    </>
  );
};

export default Teams;
