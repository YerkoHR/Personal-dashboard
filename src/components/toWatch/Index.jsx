import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";

const LoadableTable = Loadable({
  loader: () => import("./Table"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableCardList = Loadable({
  loader: () => import("./Cards"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const Index = ({ saved }) => (
  <div>
    <div>
      <h3>View mode:</h3>
      <button>Table</button>
      <button>Card</button>
    </div>
    {saved.length > 0 ? (
      <div>
        <LoadableCardList saved={saved} />
        <LoadableTable />
      </div>
    ) : (
      <h2>No anime saved</h2>
    )}
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
  {}
)(Index);
