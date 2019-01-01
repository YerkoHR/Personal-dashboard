import React from "react";
import styled from "styled-components";
import Rows from "./Rows";

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
  thead th:nth-child(1) {
    width: 20%;
  }

  thead th:nth-child(2) {
    width: 10%;
  }

  thead th:nth-child(3) {
    width: 20%;
  }

  thead th:nth-child(4) {
    width: 15%;
  }
  thead th:nth-child(5) {
    width: 7%;
  }
  thead th:nth-child(6) {
    width: 7%;
  }
  thead th:nth-child(7) {
    width: 15%;
  }
  thead tr {
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
        <tr>
          <th>Title</th>
          <th>Format</th>
          <th>Status</th>
          <th>Source</th>
          <th>Avg score</th>
          <th>Your score</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </StyledTable>
  );
}
