import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

import { List } from "react-feather";
import { ShowPLContainer } from "./styles";

const PlaylistBtn = ({ video, index, togglePlaylist }) => (
  <ShowPLContainer title="Add to Playlists">
    {video.showPlaylists && <Box video={video} index={index} />}
    <List
      className="show"
      onClick={() => togglePlaylist(index)}
      size={24}
      fill="#fff"
    />
  </ShowPLContainer>
);

PlaylistBtn.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  togglePlaylist: PropTypes.func.isRequired
};

export default PlaylistBtn;
