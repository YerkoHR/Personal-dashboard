import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Score from "./Score";
import State from "./State";
import ToggleDeleteAnime from "../../../../shared/ToggleDeleteAnime";
import {
  removeItem,
  changeScore,
  changeState
} from "../../../../redux/ducks/saved";

import { StyledTr } from "./styles";

const Rows = ({ saved, changeScore, changeState }) => (
  <React.Fragment>
    {saved.map((anime, index) => (
      <StyledTr key={anime.id}>
        <td>{anime.title}</td>
        <td>{anime.format ? anime.format : "Unknown"}</td>
        <td>{anime.status ? anime.status : "Unknown"}</td>
        <td>{anime.source}</td>
        <td>{anime.averageScore ? anime.averageScore : "TBD"}</td>
        <td>
          <Score anime={anime} index={index} changeScore={changeScore} />
        </td>
        <td>
          <State
            state={anime.myState}
            index={index}
            changeState={changeState}
            anime={anime}
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
    changeState
  }
)(Rows);
