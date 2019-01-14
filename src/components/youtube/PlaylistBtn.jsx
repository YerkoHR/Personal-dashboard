import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { togglePlaylist, toggleCreatePL } from "../../redux/ducks/fetchVideos";
import { createPlaylist } from "../../redux/ducks/playlists";

const ShowPLContainer = styled.div`
  position: relative;
  ul {
    padding: 0.2em;
    list-style: none;
    position: absolute;
    bottom: 28px;
    left: 25px;
    li {
      border: 0.2px solid #fff;
      white-space: nowrap;
      width: 100%;
      text-align: start;
      font-size: 0.8em;
    }
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
      toggleCreatePL
    } = this.props;
    return (
      <ShowPLContainer>
        {video.showPlaylists && (
          <ul className="fade-in">
            <li>playlist 1</li>
            <li>playlist 2</li>
            <li>playlist 3</li>
            {video.showCreatePL ? (
              <li>
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.input}
                />
                <button onClick={() => createPlaylist(this.state.input)}>
                  Add
                </button>
                <button onClick={() => toggleCreatePL(index)}>Cancel</button>
              </li>
            ) : (
              <li>
                <button onClick={() => toggleCreatePL(index)}>
                  Create playlist
                </button>
              </li>
            )}
          </ul>
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

export default connect(
  null,
  { togglePlaylist, createPlaylist, toggleCreatePL }
)(PlaylistBtn);
