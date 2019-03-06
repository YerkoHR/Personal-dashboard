import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Input from "./Input";
import List from "./List";
import { toggleCreatePL } from "../../../../../../../redux/ducks/fetchVideos";
import {
  createPlaylist,
  addVideo,
  deleteVideo
} from "../../../../../../../redux/ducks/playlists";

import { PLActions, PLContainer } from "./styles";

const Box = ({
  video,
  index,
  toggleCreatePL,
  playlists,
  addVideo,
  deleteVideo,
  createPlaylist
}) => (
  <PLContainer className="fade-in">
    {Object.keys(playlists).filter(key => key !== "active").length > 0 && (
      <List
        playlists={playlists}
        video={video}
        index={index}
        addVideo={addVideo}
        deleteVideo={deleteVideo}
      />
    )}
    {video.showCreatePL ? (
      <PLActions>
        <Input
          toggleCreatePL={toggleCreatePL}
          createPlaylist={createPlaylist}
          index={index}
        />
      </PLActions>
    ) : (
      <PLActions>
        <div>
          <button onClick={() => toggleCreatePL(index)}>Create playlist</button>
        </div>
      </PLActions>
    )}
  </PLContainer>
);

Box.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  createPlaylist: PropTypes.func.isRequired,
  toggleCreatePL: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  { toggleCreatePL, createPlaylist, addVideo, deleteVideo }
)(Box);
