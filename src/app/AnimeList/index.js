import React, { useEffect, useState } from "react";
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

const AnimeList = ({ saved, fetchSavedAnime }) => {
  const [listMode, onListMode] = useState("Table");
  const [filter, onFilter] = useState("All");

  useEffect(() => {
    for (let i = 0; i < saved.length; i++) {
      fetchSavedAnime(saved[i].id);
    }
  }, []);

  const filteredSaved = saved.filter(anime => {
    if (filter === "All") {
      return anime;
    }
    return anime.myState === filter;
  });

  return (
    <Container>
      {saved.length > 0 ? (
        <>
          <Buttons
            onListMode={onListMode}
            listMode={listMode}
            filter={filter}
            onFilter={onFilter}
          />
          {listMode === "Card" && <LoadableCardList saved={filteredSaved} />}
          {listMode === "Table" && <LoadableTable saved={filteredSaved} />}
        </>
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
  saved: state.saved
});

export default connect(
  mapStateToProps,
  {
    changeListMode,
    fetchSavedAnime
  }
)(AnimeList);
