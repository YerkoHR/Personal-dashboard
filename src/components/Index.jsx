import React from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import styled from "styled-components";
import changeScreenMode from "../redux/ducks/modes";
import { loadComponent } from "../redux/ducks/sideBar";
import PropTypes from "prop-types";

const LoadableAnimeComponent = Loadable({
  loader: () => import("./anime/Index"),
  loading: () => null
});

const LoadableSideBar = Loadable({
  loader: () => import("./anime/SideBar"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
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

export const Index = ({ loadComponent, sideBar }) => (
  <Main>
    <LoadableSideBar loadComponent={loadComponent} sideBar={sideBar} />
    <Content>
      {sideBar.active === "ANIME LIST" && <LoadableAnimeComponent />}
      {sideBar.active === "PLAYLIST" && <div>I'm a youtube component</div>}
    </Content>
  </Main>
);

Index.propTypes = {
  changeScreenMode: PropTypes.func.isRequired,
  loadComponent: PropTypes.func.isRequired,
  listMode: PropTypes.oneOf(["light", "dark"]),
  sideBar: PropTypes.shape({
    active: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
  })
};

const mapStateToProps = state => ({
  screenMode: state.modes.screenMode,
  sideBar: state.sideBar
});

export default connect(
  mapStateToProps,
  {
    changeScreenMode,
    loadComponent
  }
)(Index);
