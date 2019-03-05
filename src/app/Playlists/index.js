import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import styled from "styled-components";
import {
  changeActivePlaylist,
  deletePlaylist,
  deleteVideo
} from "../../redux/ducks/playlists";
import { H2 } from "../../shared/globals";
import Playlist from "./Playlist";

const LoadablePlayer = Loadable({
  loader: () => import("./Player"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const PlaylistsContainer = styled.div`
  margin: 4rem 0;
`;
const StyledUl = styled.ul`
  display: grid;
  width: 90%;
  margin: 4em auto;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  grid-gap: 1em;
`;

class Playlists extends React.Component {
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
  componentDidMount() {
    this.props.changeActivePlaylist("");
  }

  render() {
    const {
      playlists,
      changeActivePlaylist,
      deletePlaylist,
      deleteVideo
    } = this.props;

    const keys = Object.keys(playlists).filter(key => key !== "active");
    const activeIds =
      playlists.active !== "" &&
      playlists[playlists.active].map(id => id.id).join(", ");

    return (
      <PlaylistsContainer className="fade-in">
        {keys.length > 0 ? (
          <H2>Your current Playlists: </H2>
        ) : (
          <H2>You have no saved playlists :( </H2>
        )}
        <StyledUl>
          {keys.map(key => (
            <Playlist
              key={key}
              playlists={playlists}
              changeActivePlaylist={changeActivePlaylist}
              deletePlaylist={deletePlaylist}
              deleteVideo={deleteVideo}
              playlistKey={key}
            />
          ))}
        </StyledUl>
        <LoadablePlayer active={playlists.active} activeIds={activeIds} />
      </PlaylistsContainer>
    );
  }
}
Playlists.propTypes = {
  playlists: PropTypes.object.isRequired,
  changeActivePlaylist: PropTypes.func.isRequired,
  deletePlaylist: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  { changeActivePlaylist, deletePlaylist, deleteVideo }
)(Playlists);
