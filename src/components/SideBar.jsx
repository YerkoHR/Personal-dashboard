import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ResetStateBtn from "./ResetStateBtn";

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1em 1.5em;
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 2.5em 0;
    svg {
      stroke: ${props => props.theme.font};
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
          stroke: #fff;
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

export default function SideBar({ sideBar, loadComponent, resetState }) {
  return (
    <StyledSideBar>
      <div>
        <h2>Dashboard</h2>
        <ul>
          {sideBar.items.map(item => (
            <li key={item.title} onClick={() => loadComponent(item.title)}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <ResetStateBtn resetState={resetState} />
    </StyledSideBar>
  );
}

SideBar.propTypes = {
  loadComponent: PropTypes.func.isRequired,
  sideBar: PropTypes.shape({
    active: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
  })
};
