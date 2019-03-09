import React from "react";

import { ContainerPlayer } from "./styles";

const Player = ({ active, activeIds }) => (
  <>
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
  </>
);

export default Player;
