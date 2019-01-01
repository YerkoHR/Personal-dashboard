import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import styled from "styled-components";
import { changeListMode } from "../../redux/ducks/modes";

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
const SavedContainer = styled.div`
  width: 90%;
  margin: 5em auto;
`;
const BtnContainer = styled.div`
  position: relative;

  button:nth-child(1) {
    position: absolute;
    right: 45px;
    bottom: 10px;
  }
  button:nth-child(2) {
    position: absolute;
    right: 0;
    bottom: 10px;
  }
  button {
    border-radius: 4px;
    border: 0.5px solid grey;
    background: grey;
    &:focus {
      outline: 0;
    }
  }
  .active {
    background: #fff;
  }
`;

const Index = ({ saved, changeListMode, mode }) => (
  <div>
    {saved.length > 0 ? (
      <SavedContainer>
        <BtnContainer>
          <button
            className={mode === "table" ? "active" : ""}
            onClick={() => changeListMode("table")}
          >
            Table
          </button>
          <button
            className={mode === "card" ? "active" : ""}
            onClick={() => changeListMode("card")}
          >
            Card
          </button>
        </BtnContainer>
        {mode === "card" && <LoadableCardList saved={saved} />}
        {mode === "table" && <LoadableTable />}
      </SavedContainer>
    ) : (
      <h2>No anime saved</h2>
    )}
  </div>
);

Index.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  saved: state.saved,
  mode: state.modes.listMode
});

export default connect(
  mapStateToProps,
  {
    changeListMode
  }
)(Index);
