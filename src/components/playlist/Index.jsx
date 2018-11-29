import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";

const LoadablePlaylists = Loadable({
  loader: () => import("./"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const Loadable = Loadable({
  loader: () => import("./"),
  loading: () => null
});

const Index = ({}) => <div />;

Index.propTypes = {};
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Index);
/*
<button onClick={() => addVideo("newvideo", 0)}>ADD VIDEO</button>
<button onClick={() => deleteVideo(0, 0)}>DELETE VIDEO</button>
<button onClick={() => createPlaylist("my title")}>CREATE PLAYLIST</button>
<button onClick={() => deletePlaylist(0)}>DELETE PLAYLIST</button>
*/
