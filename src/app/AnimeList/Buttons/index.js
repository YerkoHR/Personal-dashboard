import React from "react";

import { BtnContainer } from "./styles";
import { BtnTable } from "../../../shared/buttons";

const Buttons = ({ onListMode, listMode }) => (
  <BtnContainer>
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
  </BtnContainer>
);

export default Buttons;
