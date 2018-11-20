import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeCurrentComponent } from "../../redux/ducks/sideBar";

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

const SideBar = ({ sideBar }) => (
  <StyledSideBar>
    <h2>Dashboard</h2>
    <ul>
      {sideBar.items.map(item => (
        <li key={item.title}>
          {item.icon}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  </StyledSideBar>
);

SideBar.propTypes = {
  sideBar: PropTypes.shape({
    active: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
  })
};

const mapStateToProps = state => ({
  sideBar: state.sideBar
});

export default connect(
  mapStateToProps,
  {
    changeCurrentComponent
  }
)(SideBar);
