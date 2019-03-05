import React from "react";

import { H2 } from "../../../shared/globals";

const Header = ({ keys }) => (
  <>
    {keys.length > 0 ? (
      <H2>Your current Playlists: </H2>
    ) : (
      <H2>You have no saved playlists :( </H2>
    )}
  </>
);

export default Header;
