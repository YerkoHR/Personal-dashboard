import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "./Input";
import List from "./List";
import { toggleCreatePL } from "../../../redux/ducks/fetchVideos";
import {
  createPlaylist,
  addVideo,
  deleteVideo
} from "../../../redux/ducks/playlists";

const PLContainer = styled.div`
  position: absolute;
  bottom: 28px;
  left: 25px;
  background: ${props => props.theme.backgroundSecundary};
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 170px;
  justify-content: center;
`;

const PLActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  flex-grow: 1;
  border-top: 1px solid #3a3a3a;
  div {
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
    color: #fff;
    font-weight: bold;
  }
`;

function Container({
  video,
  index,
  toggleCreatePL,
  playlists,
  addVideo,
  deleteVideo,
  createPlaylist
}) {
  return (
    <PLContainer className="fade-in">
      <List
        playlists={playlists}
        video={video}
        index={index}
        addVideo={addVideo}
        deleteVideo={deleteVideo}
      />
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
            <button onClick={() => toggleCreatePL(index)}>
              Create playlist
            </button>
          </div>
        </PLActions>
      )}
    </PLContainer>
  );
}

Container.propTypes = {
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
)(Container);
