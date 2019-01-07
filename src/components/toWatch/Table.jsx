import React from "react";
import styled from "styled-components";
import Loadable from "react-loadable";

const LoadableRows = Loadable({
  loader: () => import("./Rows"),
  loading: () => null
});

const LoadableHead = Loadable({
  loader: () => import("./Head"),
  loading: () => null
});

const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;

  background: #fcfbf6;
  border-radius: 4px 4px 0 0;
  th,
  td {
    padding: 0.5em;
    border: 0.5px solid #ebedf0;
  }
  tr {
    text-align: center;
  }
  tbody tr {
    transition: 0.3s ease-in;
    &:hover {
      background: #e6f7ff;
    }
  }
`;

export default function AnimeTable() {
  return (
    <StyledTable>
      <thead>
        <LoadableHead />
      </thead>
      <tbody>
        <LoadableRows />
      </tbody>
    </StyledTable>
  );
}
