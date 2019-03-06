import React from "react";

import { BtnContainer } from "./styles";

const Buttons = ({ changeListMode, mode }) => (
  <BtnContainer>
    <button
      className={mode === "table" ? "active" : ""}
      onClick={() => changeListMode("table")}
    >
      TABLE
    </button>
    <button
      className={mode === "card" ? "active" : ""}
      onClick={() => changeListMode("card")}
    >
      CARD
    </button>
  </BtnContainer>
);

export default Buttons;
