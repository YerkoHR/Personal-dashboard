import React, { Component } from "react";
import Loadable from "react-loadable";
import styled from "styled-components";

const LoadableAnime = Loadable({
  loader: () => import("./anime/Main"),
  loading: () => null
});

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 2em;
  margin: 1em;
  background: ${props => props.theme.container};
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const SideBar = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 2em 0;

    li {
      transition: 0.6s ease-in-out;
      &:hover {
        color: #fff;
      }
      padding: 0.5em 0;
      span {
        margin-left: 0.8em;
        cursor: pointer;
      }
    }
  }
`;

const MainContent = styled.div`
  background: ${props => props.theme.card};
`;

export class Index extends Component {
  constructor() {
    super();
    this.state = {
      active: ""
    };
  }

  render() {
    return (
      <Body>
        <SideBar>
          <ul>
            <li>
              <icon>1</icon>
              <span>1</span>
            </li>
            <li>
              <icon>2</icon>
              <span>2</span>
            </li>
            <li>
              <icon>3</icon>
              <span>3</span>
            </li>
          </ul>
        </SideBar>
        <MainContent>
          <LoadableAnime />
          <LoadableAnime />
          <LoadableAnime />
          <LoadableAnime />
          <LoadableAnime />
          <LoadableAnime />
          <LoadableAnime />
          <LoadableAnime />
          <LoadableAnime />
        </MainContent>
      </Body>
    );
  }
}

export default Index;
