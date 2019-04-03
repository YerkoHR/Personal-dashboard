import React from "react";
import EditTitle from "./EditTitle";

import { PlTitle } from "./styles";

const Title = ({
  changeActivePlaylist,
  deletePlaylist,
  playlistKey,
  playlist,
  editPlaylistTitle
}) => (
  <PlTitle>
    <div>
      <EditTitle
        editPlaylistTitle={editPlaylistTitle}
        playlistKey={playlistKey}
      />
    </div>
    <div className="pl-btns">
      {playlist.length > 0 && (
        <button
          onClick={() => {
            changeActivePlaylist(playlistKey);
          }}
        >
          Play all
        </button>
      )}
      <button onClick={() => deletePlaylist(playlistKey)}>Delete</button>
    </div>
  </PlTitle>
);

export default Title;
