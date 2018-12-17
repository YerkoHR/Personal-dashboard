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

const LoadableYoutubeComponent = Loadable({
  loader: () => import("./youtube/Index"),
  loading: () => null
});

const LoadableWatchList = Loadable({
  loader: () => import("./toWatch/Index"),
  loading: () => null
});

const LoadableSideBar = Loadable({
  loader: () => import("./SideBar"),
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

export const StyledButton = styled.button`
  background: ${props => props.theme.font};
  border: 2px solid ${props => props.theme.font};
  outline: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export const Index = ({ loadComponent, sideBar }) => (
  <Main>
    <LoadableSideBar loadComponent={loadComponent} sideBar={sideBar} />
    <Content>
      {sideBar.active === "SEARCH ANIME" && <LoadableAnimeComponent />}
      {sideBar.active === "SEARCH VIDEO" && <LoadableYoutubeComponent />}
      {sideBar.active === "PLAYLIST" && <div>I'm a playlist</div>}
      {sideBar.active === "ANIME LIST" && <LoadableWatchList />}
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
