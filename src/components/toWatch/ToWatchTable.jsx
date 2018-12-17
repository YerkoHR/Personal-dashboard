import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTable = styled.table`
  table-layout: fixed;
  width: 75%;
  border-collapse: collapse;
  margin: 5em auto;
  th,
  td {
    padding: 1em;
    border: 0.5px solid #fff;
  }
  thead td {
    text-align: center;
  }
`;
const StyledTr = styled.tr`
  padding: 1em;
  margin: 1em;
`;

export default function AnimeTable({ saved, removeItem }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Title</th>
          <th>Format</th>
          <th>Status</th>
          <th>Source</th>
          <th>Avg score</th>
        </tr>
      </thead>
      <tbody>
        {saved.map(anime => (
          <StyledTr key={anime.id}>
            <td>{anime.title.romaji}</td>
            <td>{anime.format}</td>
            <td>{anime.status}</td>
            <td>{anime.source}</td>
            <td>{anime.averageScore}</td>
            <td>
              <button
                onClick={() =>
                  removeItem(saved.map(x => x.id).indexOf(anime.id))
                }
              >
                Delete
              </button>
            </td>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
}

AnimeTable.propTypes = {
  saved: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        romaji: PropTypes.string.isRequired
      })
    })
  ).isRequired
};
