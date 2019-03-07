import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  changeActivePlaylist,
  deletePlaylist,
  deleteVideo,
  reOrderPlaylist
} from "../../../../redux/ducks/playlists";
import Title from "./Title";
import VideoList from "./VideoList";

import { PlContainer } from "./styles";

const Playlist = ({
  playlists,
  changeActivePlaylist,
  deletePlaylist,
  deleteVideo,
  playlistKey,
  reOrderPlaylist
}) => {
  const playlist = playlists[playlistKey];

  return (
    <PlContainer>
      <Title
        changeActivePlaylist={changeActivePlaylist}
        deletePlaylist={deletePlaylist}
        playlistKey={playlistKey}
        playlist={playlist}
      />

      <VideoList
        playlist={playlist}
        deleteVideo={deleteVideo}
        playlistKey={playlistKey}
        reOrderPlaylist={reOrderPlaylist}
      />
    </PlContainer>
  );
};

Playlist.propTypes = {
  playlists: PropTypes.object.isRequired,
  changeActivePlaylist: PropTypes.func.isRequired,
  deletePlaylist: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired,
  playlistKey: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ playlists: state.playlists });

export default connect(
  mapStateToProps,
  { changeActivePlaylist, deletePlaylist, deleteVideo, reOrderPlaylist }
)(Playlist);
