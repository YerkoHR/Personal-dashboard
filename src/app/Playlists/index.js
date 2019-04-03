import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { changeActivePlaylist } from "../../redux/ducks/playlists";
import Header from "./Header";
import List from "./List";

import { PlaylistsContainer } from "./styles";

const LoadablePlayer = Loadable({
  loader: () => import("./Player"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const Playlists = ({ changeActivePlaylist, playlists }) => {
  useEffect(() => {
    changeActivePlaylist("");
  }, []);

  const keys = Object.keys(playlists).filter(key => key !== "active");
  const activeIds =
    playlists.active !== "" &&
    playlists[playlists.active].map(id => id.id).join(", ");

  return (
    <PlaylistsContainer className="fade-in">
      <Header keys={keys} />
      <List keys={keys} />
      <LoadablePlayer active={playlists.active} activeIds={activeIds} />
    </PlaylistsContainer>
  );
};

Playlists.propTypes = {
  playlists: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  { changeActivePlaylist }
)(Playlists);
