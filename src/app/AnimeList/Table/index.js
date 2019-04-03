import React from "react";
import Rows from "./Rows";
import Head from "./Head";

import { StyledTable } from "./styles";

const Table = ({ saved }) => {
  return (
    <>
      <StyledTable className="fade-in">
        <thead>
          <Head />
        </thead>
        <tbody>
          <Rows saved={saved} />
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
