import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import {
  togglePlayer,
  togglePlaylist,
  fetchDetailsVideo
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
  loader: () => import("./SearchVideo"),
  loading: () => null
});

const Index = ({
  results,
  togglePlayer,
  togglePlaylist,
  fetchDetailsVideo
}) => (
  <div className="fade-in">
    <LoadableSearch />
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
Index.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchDetailsVideo: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  results: state.fetchVideos.results
});

export default connect(
  mapStateToProps,
  { togglePlayer, togglePlaylist, fetchDetailsVideo }
)(Index);
