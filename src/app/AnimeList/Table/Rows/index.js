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
  const handleUnknown = head => (head ? head : "Unknown");

  return (
    <>
      {saved.map(anime => (
        <StyledTr key={anime.id}>
          <td>{anime.title}</td>
          <td>{handleUnknown(anime.format)}</td>
          <td>{handleUnknown(anime.status)}</td>
          <td>{handleUnknown(anime.source)}</td>
          <td>{handleUnknown(anime.averageScore)}</td>
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

          <td>
            {anime.myState === "Dropped" && (
              <TableModal
                updateReason={updateReason}
                id={anime.id}
                reason={anime.reason}
              />
            )}
            <ToggleDeleteAnime data={anime} saved={saved} />
          </td>
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
