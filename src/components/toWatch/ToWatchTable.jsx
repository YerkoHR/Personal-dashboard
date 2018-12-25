import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTable = styled.table`
  table-layout: fixed;
  width: 90%;
  border-collapse: collapse;
  margin: 5em auto;
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
const StyledTr = styled.tr`
  padding: 1em;
  margin: 1em;
  svg {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      fill: red;
    }
  }
`;
const StyledWatchedCounter = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledCounter = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  span {
    margin: 0 0.2em;
  }
`;

export default function AnimeTable({
  saved,
  removeItem,
  changeScore,
  changeState,
  incWatchedCounter,
  decWatchedCounter
}) {
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
        {saved.map((anime, index) => (
          <StyledTr key={anime.id}>
            <td>{anime.title.romaji}</td>
            <td>{anime.format ? anime.format : "Unknown"}</td>
            <td>{anime.status ? anime.status : "Unknown"}</td>
            <td>{anime.source ? anime.source : "Unknown"}</td>
            <td>{anime.averageScore ? anime.averageScore : "TBD"}</td>
            <td>
              {anime.myState !== "To watch" ? (
                <select
                  value={anime.myScore}
                  onChange={e => changeScore(index, e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              ) : (
                <span>TBD</span>
              )}
            </td>
            <td>
              <StyledWatchedCounter>
                <select
                  value={anime.myState}
                  onChange={e => changeState(index, e.target.value)}
                >
                  <option value="To watch">To watch</option>
                  <option value="Watching">Watching</option>
                  <option value="Completed">Completed</option>
                </select>
                {(anime.myState === "Watching" ||
                  anime.myState === "Completed") && (
                  <StyledCounter>
                    <div>
                      {anime.myState === "Completed"
                        ? anime.episodes
                        : anime.episodesWatched}
                      <span>/</span> {anime.episodes}
                    </div>
                    {anime.myState !== "Completed" && (
                      <div>
                        <button
                          disabled={anime.episodesWatched === 0}
                          onClick={() => decWatchedCounter(index)}
                        >
                          -
                        </button>
                        <button
                          disabled={anime.episodesWatched === anime.episodes}
                          onClick={() => incWatchedCounter(index)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </StyledCounter>
                )}
              </StyledWatchedCounter>
            </td>
            <td>
              <svg
                onClick={() =>
                  removeItem(saved.map(x => x.id).indexOf(anime.id))
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="24"
                height="24"
              >
                <path d="M7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0zm0 12H18V2H7.828l-5 5 5 5zm6.586-5l1.414 1.414a1 1 0 0 1-1.414 1.414L13 8.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L11.586 7l-1.414-1.414a1 1 0 1 1 1.414-1.414L13 5.586l1.414-1.414a1 1 0 1 1 1.414 1.414L14.414 7z" />
              </svg>
            </td>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
}

AnimeTable.propTypes = {
  removeItem: PropTypes.func.isRequired,
  changeScore: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  incWatchedCounter: PropTypes.func.isRequired,
  decWatchedCounter: PropTypes.func.isRequired,
  saved: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        romaji: PropTypes.string.isRequired
      }),
      averageScore: PropTypes.number,
      myScore: PropTypes.number.isRequired,
      myState: PropTypes.string.isRequired,
      episodes: PropTypes.number.isRequired,
      episodesWatched: PropTypes.number.isRequired,
      status: PropTypes.string,
      source: PropTypes.string,
      format: PropTypes.string
    })
  ).isRequired
};
