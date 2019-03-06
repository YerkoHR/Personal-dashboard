import React from "react";
import Rows from "./Rows";
import Head from "./Head";

import { StyledTable } from "./styles";

const Table = () => (
  <StyledTable className="fade-in">
    <thead>
      <Head />
    </thead>
    <tbody>
      <Rows />
    </tbody>
  </StyledTable>
);

export default Table;
