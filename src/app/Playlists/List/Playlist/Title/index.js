import React from "react";

import { PlTitle } from "./styles";

const Title = ({
  changeActivePlaylist,
  deletePlaylist,
  playlistKey,
  playlist
}) => (
  <PlTitle>
    <h3>{playlistKey}</h3>
    <div className="pl-btns">
      {playlist.length > 0 && (
        <button onClick={() => changeActivePlaylist(playlistKey)}>
          Play all
        </button>
      )}
      <button onClick={() => deletePlaylist(playlistKey)}>Delete</button>
    </div>
  </PlTitle>
);

export default Title;
