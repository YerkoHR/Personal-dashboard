import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { removeItem } from "../../redux/ducks/saved";
const LoadableTable = Loadable({
  loader: () => import("./ToWatchTable"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableCardList = Loadable({
  loader: () => import("./ToWatchList"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const Index = ({ saved, removeItem }) => (
  <div>
    <div>
      <h3>View mode:</h3>
      <button>Table</button>
      <button>Card</button>
    </div>
    <LoadableCardList saved={saved} removeItem={removeItem} />
    <LoadableTable saved={saved} removeItem={removeItem} />
  </div>
);

Index.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  saved: state.saved
});

export default connect(
  mapStateToProps,
  {
    removeItem
  }
)(Index);
