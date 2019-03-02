import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSideBar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5em auto;
  width: 75%;
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

export default function SideBar({ sideBar, loadComponent, resetState }) {
  return (
    <StyledSideBar>
      {sideBar.items.map(item => (
        <li key={item.title} onClick={() => loadComponent(item.title)}>
          {item.icon}
          <div>{item.title}</div>
        </li>
      ))}
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
