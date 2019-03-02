import React from "react";
import styled from "styled-components";
import Rows from "./Rows";
import Head from "./Head";

const StyledTable = styled.table`
  border-collapse: collapse;
  background: ${props => props.theme.backgroundPrimary};
  border-radius: 10px;
  th,
  td,
  tr {
    padding: 0.5em;
    border: 0.5px solid ${props => props.theme.border};
    color: ${props => props.theme.P};
  }
  tr {
    text-align: center;
  }
  tbody tr {
    transition: 0.3s ease-in;
    &:hover {
      background: ${props => props.theme.ternary};
    }
  }
`;

export default function AnimeTable() {
  return (
    <StyledTable className="fade-in">
      <thead>
        <Head />
      </thead>
      <tbody>
        <Rows />
      </tbody>
    </StyledTable>
  );
}
