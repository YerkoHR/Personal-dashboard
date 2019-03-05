import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import MyScore from "./MyScore";
import MyState from "./MyState";
import ToggleDeleteAnime from "../../shared/ToggleDeleteAnime";
import {
  removeItem,
  changeScore,
  changeState,
  incWatchedCounter,
  decWatchedCounter
} from "../../redux/ducks/saved";

// Code splitting of components that define an UI shape will produce
// an initial size adjustment on component import/mount, it doesn't look
// good specially in a table.

const StyledTr = styled.tr`
  padding: 1em;
  margin: 1em;
  svg {
    transition: 0.3s ease-in-out;
  }
`;

const Rows = ({
  saved,
  changeScore,
  changeState,
  incWatchedCounter,
  decWatchedCounter
}) => (
  <React.Fragment>
    {saved.map((anime, index) => (
      <StyledTr key={anime.id}>
        <td>{anime.title}</td>
        <td>{anime.format ? anime.format : "Unknown"}</td>
        <td>{anime.status ? anime.status : "Unknown"}</td>
        <td>{anime.source}</td>
        <td>{anime.averageScore ? anime.averageScore : "TBD"}</td>
        <td>
          <MyScore anime={anime} index={index} changeScore={changeScore} />
        </td>
        <td>
          <MyState
            anime={anime}
            index={index}
            changeState={changeState}
            incWatchedCounter={incWatchedCounter}
            decWatchedCounter={decWatchedCounter}
          />
        </td>
        <td>
          <ToggleDeleteAnime data={anime} saved={saved} />
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
      title: PropTypes.string.isRequired,
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
