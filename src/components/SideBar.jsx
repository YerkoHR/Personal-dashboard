import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem auto;
  width: 75%;
  h2 {
    margin-bottom: 4rem;
    text-align: center;
    width: 100%;
  }
  svg {
    stroke: ${props => props.theme.P};
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
    div {
      margin-left: 0.8em;
      font-size: 0.85em;
      cursor: pointer;
    }
  }
`;

export default function SideBar({ sideBar, loadComponent }) {
  return (
    <StyledSideBar>
      <h2>Dashboard</h2>
      <ul>
        {sideBar.items.map(item => (
          <li key={item.title} onClick={() => loadComponent(item.title)}>
            {item.icon}
            <div>{item.title}</div>
          </li>
        ))}
      </ul>
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
