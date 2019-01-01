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
          <svg
            name="delete"
            onClick={() => removeItem(saved.map(x => x.id).indexOf(anime.id))}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2 -2 24 24"
            width="24"
            height="24"
          >
            <path d="M7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0zm0 12H18V2H7.828l-5 5 5 5zm6.586-5l1.414 1.414a1 1 0 0 1-1.414 1.414L13 8.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L11.586 7l-1.414-1.414a1 1 0 1 1 1.414-1.414L13 5.586l1.414-1.414a1 1 0 1 1 1.414 1.414L14.414 7z" />
          </svg>
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
