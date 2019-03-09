import React, { useState } from "react";
import Rows from "./Rows";
import Head from "./Head";
import { myStates } from "./Rows/State/myStates";

import { StyledTable, TableContainer } from "./styles";
import { BtnTable } from "../../../shared/buttons";

const Table = () => {
  const [filter, onFilter] = useState("All");

  return (
    <TableContainer>
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
      <StyledTable className="fade-in">
        <thead>
          <Head />
        </thead>
        <tbody>
          <Rows filter={filter} />
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
