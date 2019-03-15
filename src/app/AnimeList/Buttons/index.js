import React from "react";
import { myStates } from "../Table/Rows/State/myStates";

import { BtnContainer } from "./styles";
import { BtnTable } from "../../../shared/buttons";

const Buttons = ({ onListMode, listMode, onFilter, filter }) => (
  <BtnContainer>
    <div className="filter-btns">
      <BtnTable
        className={filter === "All" ? "active" : ""}
        onClick={() => onFilter("All")}
      >
        All
      </BtnTable>
      {myStates.map((state, i) => (
        <BtnTable
          className={filter === state ? "active" : ""}
          onClick={() => onFilter(state)}
          key={i}
        >
          {state}
        </BtnTable>
      ))}
    </div>
    <div className="list-btns">
      <BtnTable
        className={listMode === "Table" ? "active" : ""}
        onClick={() => onListMode("Table")}
      >
        TABLE
      </BtnTable>
      <BtnTable
        className={listMode === "Card" ? "active" : ""}
        onClick={() => onListMode("Card")}
      >
        CARD
      </BtnTable>
    </div>
  </BtnContainer>
);

export default Buttons;
