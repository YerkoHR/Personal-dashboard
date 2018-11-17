import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTable = styled.table``;
const StyledTr = styled.tr`
  padding: 1em;
  margin: 1em;
`;

export default function AnimeTable({ data }) {
  return (
    <StyledTable>
      <tr>
        <th>Title</th>
        <th>Format</th>
        <th>Status</th>
        <th>Source</th>
        <th>Avg score</th>
      </tr>
      {data.map(anime => (
        <StyledTr key={anime.id}>
          <td>{`${anime.title.romaji}`}</td>
          <td>{`${anime.format}`}</td>
          <td>{`${anime.status}`}</td>
          <td>{`${anime.source}`}</td>
          <td>{`${anime.averageScore}`}</td>
        </StyledTr>
      ))}
    </StyledTable>
  );
}

AnimeTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        romaji: PropTypes.string.isRequired
      })
    })
  ).isRequired
};
