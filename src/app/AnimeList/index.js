import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { changeListMode } from "../../redux/ducks/modes";
import { fetchSavedAnime } from "../../redux/ducks/saved";
import Buttons from "./Buttons";

import Container from "../../shared/Container";
import { EmptyMessage } from "./styles";

const LoadableTable = Loadable({
  loader: () => import("./Table"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableCardList = Loadable({
  loader: () => import("./CardList"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const AnimeList = ({ saved, changeListMode, mode, fetchSavedAnime }) => {
  useEffect(() => {
    for (let i = 0; i < saved.length; i++) {
      fetchSavedAnime(saved[i].id);
    }
  }, []);

  return (
    <Container>
      {saved.length > 0 ? (
        <div>
          <Buttons changeListMode={changeListMode} mode={mode} />
          {mode === "card" && <LoadableCardList saved={saved} />}
          {mode === "table" && <LoadableTable />}
        </div>
      ) : (
        <EmptyMessage>No anime saved</EmptyMessage>
      )}
    </Container>
  );
};

AnimeList.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  saved: state.saved,
  mode: state.modes.listMode
});

export default connect(
  mapStateToProps,
  {
    changeListMode,
    fetchSavedAnime
  }
)(AnimeList);
