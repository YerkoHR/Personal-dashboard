import React, { useEffect } from "react";

import { ContainerPlayer } from "./styles";

const Player = ({ active, activeIds }) => {
  useEffect(() => {
    if ((active !== "") & (activeIds !== "")) {
      document
        .getElementById("pl-player")
        .scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div id="pl-player">
      {(active !== "") & (activeIds !== "") ? (
        <ContainerPlayer>
          <iframe
            type="text/html"
            title={active}
            src={`https://www.youtube.com/embed?listType=playlist&playlist=${activeIds}&loop=1`}
          />
        </ContainerPlayer>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Player;
