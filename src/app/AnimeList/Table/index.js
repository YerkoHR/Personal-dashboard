import React, { useState } from "react";
import Rows from "./Rows";
import Head from "./Head";
import { myStates } from "./Rows/State/myStates";

import { StyledTable } from "./styles";

const Table = () => {
  const [filter, onFilter] = useState("All");

  return (
    <div>
      <button onClick={() => onFilter("All")}>All</button>
      {myStates.map((state, i) => (
        <button onClick={() => onFilter(state)} key={i}>
          {state}
        </button>
      ))}
      <StyledTable className="fade-in">
        <thead>
          <Head />
        </thead>
        <tbody>
          <Rows filter={filter} />
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Table;
