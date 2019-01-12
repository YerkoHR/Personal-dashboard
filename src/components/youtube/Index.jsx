import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { togglePlayer } from "../../redux/ducks/fetchVideos";

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableSearch = Loadable({
  loader: () => import("./SearchVideo"),
  loading: () => null
});

const Index = ({ results, togglePlayer }) => (
  <div className="fade-in">
    <LoadableSearch />
    <LoadableResults data={results} togglePlayer={togglePlayer} />
  </div>
);
Index.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};
const mapStateToProps = state => ({
  results: state.fetchVideos.results
});

export default connect(
  mapStateToProps,
  { togglePlayer }
)(Index);
/*
<button onClick={() => addVideo("newvideo", 0)}>ADD VIDEO</button>
<button onClick={() => deleteVideo(0, 0)}>DELETE VIDEO</button>
<button onClick={() => createPlaylist("my title")}>CREATE PLAYLIST</button>
<button onClick={() => deletePlaylist(0)}>DELETE PLAYLIST</button>
*/
