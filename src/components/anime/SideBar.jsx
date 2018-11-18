import React from "react";
import styled from "styled-components";

const StyledSideBar = styled.div`
  margin: 1em 1.5em;
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    padding: 0;
    margin: 2.5em 0;
    svg {
      fill: ${props => props.theme.font};
      width: 24px;
      height: auto;
      transition: 0.6s ease-in-out;
    }
    li {
      padding: 1em 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: fit-content;
      transition: 0.6s ease-in-out;
      &:hover {
        color: #fff;
        svg {
          fill: #fff;
        }
      }
      span {
        margin-left: 0.8em;
        font-size: 0.85em;
        cursor: pointer;
      }
    }
  }
`;

export default function SideBar() {
  return (
    <StyledSideBar>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z" />
            <g>
              <path d="M80 376h288v48H80z" />
            </g>
          </svg>
          <span>ANIME LIST</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M96 52v408l320-204L96 52z" />
          </svg>

          <span>PLAYLIST</span>
        </li>
      </ul>
    </StyledSideBar>
  );
}
