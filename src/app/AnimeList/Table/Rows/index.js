import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Score from "./Score";
import State from "./State";
import TableModal from "./TableModal";
import ToggleDeleteAnime from "../../../../shared/ToggleDeleteAnime";
import {
  removeItem,
  changeScore,
  changeState,
  updateReason
} from "../../../../redux/ducks/saved";

import { StyledTr } from "./styles";

const Rows = ({ saved, changeScore, changeState, updateReason }) => {
  return (
    <>
      {saved.map(anime => (
        <StyledTr key={anime.id}>
          <td>{anime.title}</td>
          <td>{anime.format ? anime.format : "Unknown"}</td>
          <td>{anime.status ? anime.status : "Unknown"}</td>
          <td>{anime.source}</td>
          <td>{anime.averageScore ? anime.averageScore : "TBD"}</td>
          <td>
            <Score anime={anime} changeScore={changeScore} />
          </td>
          <td>
            <State
              state={anime.myState}
              changeState={changeState}
              anime={anime}
            />
          </td>
          {anime.myState === "Dropped" ? (
            <td>
              <TableModal
                updateReason={updateReason}
                id={anime.id}
                reason={anime.reason}
              />
              <ToggleDeleteAnime data={anime} saved={saved} />
            </td>
          ) : (
            <td>
              <ToggleDeleteAnime data={anime} saved={saved} />
            </td>
          )}
        </StyledTr>
      ))}
    </>
  );
};

Rows.propTypes = {
  removeItem: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  updateReason: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    removeItem,
    changeScore,
    changeState,
    updateReason
  }
)(Rows);
