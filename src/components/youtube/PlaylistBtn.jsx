import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { togglePlaylist, toggleCreatePL } from "../../redux/ducks/fetchVideos";
import {
  createPlaylist,
  addVideo,
  deleteVideo
} from "../../redux/ducks/playlists";

const ShowPLContainer = styled.div`
  position: relative;
`;

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
  ul {
    list-style: none;
    padding: 1em;
    margin: 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0.5em;
    }
  }
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
  input {
    border: 0;
    border-bottom: 1px solid #fff;
    outline: 0;
    width: 120px;
    background: transparent;
    align-self: center;
    color: #fff;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
    color: #fff;
    font-weight: bold;
  }
`;
class PlaylistBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  render() {
    const {
      video,
      index,
      togglePlaylist,
      createPlaylist,
      toggleCreatePL,
      playlists,
      addVideo,
      deleteVideo
    } = this.props;
    return (
      <ShowPLContainer>
        {video.showPlaylists && (
          <PLContainer className="fade-in">
            <ul>
              {Object.keys(playlists)
                .filter(key => key !== "active")
                .map((key, index) => (
                  <li key={index + key}>
                    <div>{key}</div>
                    <div>
                      {playlists[key].indexOf(video.id.videoId) === -1 ? (
                        <svg
                          onClick={() => addVideo(key, video.id.videoId)}
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          onClick={() =>
                            deleteVideo(
                              key,
                              playlists[key].indexOf(video.id.videoId)
                            )
                          }
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                          />
                        </svg>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
            {video.showCreatePL ? (
              <PLActions>
                <input
                  type="text"
                  placeholder="Enter playlist name"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <div>
                  <button
                    onClick={() => {
                      createPlaylist(this.state.input);
                      this.setState({ input: "" });
                      toggleCreatePL(index);
                    }}
                  >
                    Add
                  </button>
                  <button onClick={() => toggleCreatePL(index)}>Cancel</button>
                </div>
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
        )}
        <svg
          className="show"
          onClick={() => togglePlaylist(index)}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
        >
          <path d="M2,16H10V14H2M18,14V10H16V14H12V16H16V20H18V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z" />
        </svg>
      </ShowPLContainer>
    );
  }
}

PlaylistBtn.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  togglePlaylist: PropTypes.func.isRequired,
  createPlaylist: PropTypes.func.isRequired,
  toggleCreatePL: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  { togglePlaylist, createPlaylist, toggleCreatePL, addVideo, deleteVideo }
)(PlaylistBtn);
