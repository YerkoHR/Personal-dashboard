import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { addItem, removeItem } from "../../redux/ducks/saved";

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

const Index = ({ animeDetails, saved, addItem, removeItem }) => (
  <div className="fade-in">
    <LoadableSearchSection />
    {animeDetails && <LoadableDetailsCard data={animeDetails} />}
  </div>
);

Index.propTypes = {
  animeDetails: PropTypes.object
};

const mapStateToProps = state => ({
  animeDetails: state.animeDetails,
  saved: state.saved
});

export default connect(
  mapStateToProps,
  {
    addItem,
    removeItem
  }
)(Index);
