import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import {
  togglePlayer,
  togglePlaylist,
  fetchDetailsVideo,
  fetchDataVideo
} from "../../redux/ducks/fetchVideos";

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableSearch = Loadable({
  loader: () => import("./Search"),
  loading: () => null
});

const VideoSearch = ({
  results,
  togglePlayer,
  togglePlaylist,
  fetchDetailsVideo,
  fetchDataVideo
}) => (
  <div className="fade-in">
    <LoadableSearch fetchDataVideo={fetchDataVideo} />
    {results.length > 0 && (
      <LoadableResults
        data={results}
        togglePlayer={togglePlayer}
        togglePlaylist={togglePlaylist}
        fetchDetailsVideo={fetchDetailsVideo}
      />
    )}
  </div>
);
VideoSearch.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchDetailsVideo: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  results: state.fetchVideos.results
});

export default connect(
  mapStateToProps,
  { togglePlayer, togglePlaylist, fetchDetailsVideo, fetchDataVideo }
)(VideoSearch);
