import React from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import styled from "styled-components";
import changeScreenMode from "../redux/ducks/modes";
import PropTypes from "prop-types";

const LoadableAnime = Loadable({
  loader: () => import("./anime/Main"),
  loading: () => null
});

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 1em;
  margin: 1em;
  background: ${props => props.theme.container};
  position: relative;
  min-height: 530px;
  border-radius: 5px;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.7em 1em;
  h2 {
    text-align: center;
  }
  ul {
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

const MainContent = styled.div`
  background: ${props => props.theme.card};
  text-align: center;
`;

export const Index = () => (
  <Body>
    <SideBar>
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
    </SideBar>
    <MainContent>
      <LoadableAnime />
    </MainContent>
  </Body>
);

Index.propTypes = {
  changeScreenMode: PropTypes.func.isRequired,
  listMode: PropTypes.oneOf(["light", "dark"])
};

const mapStateToProps = state => ({
  screenMode: state.modes.screenMode
});

export default connect(
  mapStateToProps,
  {
    changeScreenMode
  }
)(Index);
