import React from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import styled from "styled-components";
import changeScreenMode from "../redux/ducks/modes";
import PropTypes from "prop-types";

const LoadableAnimeComponent = Loadable({
  loader: () => import("./anime/Index"),
  loading: () => null
});

const LoadableSideBar = Loadable({
  loader: () => import("./anime/SideBar"),
  loading: () => null
});

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
`;

const Content = styled.div`
  background: ${props => props.theme.backgroundSecundary};
  text-align: center;
  height: 100%;
`;

export const Index = () => (
  <Main>
    <LoadableSideBar />
    <Content>
      <LoadableAnimeComponent />
    </Content>
  </Main>
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
