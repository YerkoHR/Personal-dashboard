import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";

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

const Index = ({ results }) => (
<div>
      <LoadableSearch />
      <LoadableResults data={results}/>
    </div>
)
Index.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
}
const mapStateToProps = state => ({
  results: state.fetchVideos.results
})
  




export default connect(mapStateToProps, {})(Index)
/*
<button onClick={() => addVideo("newvideo", 0)}>ADD VIDEO</button>
<button onClick={() => deleteVideo(0, 0)}>DELETE VIDEO</button>
<button onClick={() => createPlaylist("my title")}>CREATE PLAYLIST</button>
<button onClick={() => deletePlaylist(0)}>DELETE PLAYLIST</button>
*/
