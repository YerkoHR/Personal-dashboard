import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";

const LoadableDetailsCard = Loadable({
  loader: () => import("./Card"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableSearchSection = Loadable({
  loader: () => import("./Search"),
  loading: () => null
});

const Index = ({ animeDetails }) => (
  <div className="fade-in">
    <LoadableSearchSection />
    {animeDetails && <LoadableDetailsCard data={animeDetails} />}
  </div>
);

Index.propTypes = {
  animeDetails: PropTypes.object
};

const mapStateToProps = state => ({
  animeDetails: state.animeDetails
});

export default connect(
  mapStateToProps,
  {}
)(Index);
