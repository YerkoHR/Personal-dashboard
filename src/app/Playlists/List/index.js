import React from "react";
import Playlist from "./Playlist";

import { StyledUl } from "./styles";

const List = ({ keys }) => (
  <StyledUl>
    {keys.map(key => (
      <Playlist key={key} playlistKey={key} />
    ))}
  </StyledUl>
);

export default List;
