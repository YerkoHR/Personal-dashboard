import React from "react";
import Loadable from "react-loadable";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loadComponent } from "../redux/ducks/sideBar";
import { resetState } from "../redux/ducks/saved";

import { Main, Content } from "./styles";

const LoadableAnimeComponent = Loadable({
  loader: () => import("./AnimeSearch"),
  loading: () => null
});

const LoadableYoutubeComponent = Loadable({
  loader: () => import("./VideoSearch"),
  loading: () => null
});

const LoadableWatchList = Loadable({
  loader: () => import("./AnimeList"),
  loading: () => null
});

const LoadablePlaylists = Loadable({
  loader: () => import("./Playlists"),
  loading: () => null
});

const LoadableSideBar = Loadable({
  loader: () => import("./Sidebar"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

//<button onClick={() => resetState()}>RESET SAVED ANIME</button>;

export const Index = ({ loadComponent, sideBar, resetState }) => (
  <Main>
    <LoadableSideBar loadComponent={loadComponent} sideBar={sideBar} />
    <Content>
      {sideBar.active === "SEARCH ANIME" && <LoadableAnimeComponent />}
      {sideBar.active === "SEARCH VIDEO" && <LoadableYoutubeComponent />}
      {sideBar.active === "PLAYLIST" && <LoadablePlaylists />}
      {sideBar.active === "ANIME LIST" && <LoadableWatchList />}
    </Content>
  </Main>
);

Index.propTypes = {
  loadComponent: PropTypes.func.isRequired,
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
    loadComponent,
    resetState
  }
)(Index);
