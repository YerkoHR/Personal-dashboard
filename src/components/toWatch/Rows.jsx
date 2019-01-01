import React from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  removeItem,
  changeScore,
  changeState,
  incWatchedCounter,
  decWatchedCounter
} from "../../redux/ducks/saved";
import DeleteSaved from "../DeleteSaved";

const LoadableScore = Loadable({
  loader: () => import("./MyScore"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const LoadableState = Loadable({
  loader: () => import("./MyState"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const StyledTr = styled.tr`
  padding: 1em;
  margin: 1em;
  svg {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      fill: red;
    }
  }
`;

const Rows = ({
  saved,
  removeItem,
  changeScore,
  changeState,
  incWatchedCounter,
  decWatchedCounter
}) => (
  <React.Fragment>
    {saved.map((anime, index) => (
      <StyledTr key={anime.id}>
        <td>{anime.title.romaji}</td>
        <td>{anime.format ? anime.format : "Unknown"}</td>
        <td>{anime.status ? anime.status : "Unknown"}</td>
        <td>{anime.source ? anime.source : "Unknown"}</td>
        <td>{anime.averageScore ? anime.averageScore : "TBD"}</td>
        <td>
          <LoadableScore
            anime={anime}
            index={index}
            changeScore={changeScore}
          />
        </td>
        <td>
          <LoadableState
            anime={anime}
            index={index}
            changeState={changeState}
            incWatchedCounter={incWatchedCounter}
            decWatchedCounter={decWatchedCounter}
          />
        </td>
        <td>
          <DeleteSaved
            removeItem={removeItem}
            saved={saved}
            data={anime}
            svg={true}
          />
        </td>
      </StyledTr>
    ))}
  </React.Fragment>
);

Rows.propTypes = {
  removeItem: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  incWatchedCounter: PropTypes.func.isRequired,
  decWatchedCounter: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        romaji: PropTypes.string.isRequired
      }),
      nextAiringEpisode: PropTypes.shape({ episode: PropTypes.number }),
      averageScore: PropTypes.number,
      myScore: PropTypes.number.isRequired,
      myState: PropTypes.string.isRequired,
      episodes: PropTypes.number,
      episodesWatched: PropTypes.number.isRequired,
      status: PropTypes.string,
      source: PropTypes.string,
      format: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  saved: state.saved
});

export default connect(
  mapStateToProps,
  {
    removeItem,
    changeScore,
    changeState,
    incWatchedCounter,
    decWatchedCounter
  }
)(Rows);
