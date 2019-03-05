import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { changeActivePlaylist } from "../../redux/ducks/playlists";
import Header from "./Header";
import List from "./List";

import { PlaylistsContainer } from "./styles";

const LoadablePlayer = Loadable({
  loader: () => import("./Player"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  componentDidMount() {
    this.props.changeActivePlaylist("");
  }

  render() {
    const { playlists } = this.props;

    const keys = Object.keys(playlists).filter(key => key !== "active");
    const activeIds =
      playlists.active !== "" &&
      playlists[playlists.active].map(id => id.id).join(", ");

    return (
      <PlaylistsContainer className="fade-in">
        <Header keys={keys} />
        <List keys={keys} />
        <LoadablePlayer active={playlists.active} activeIds={activeIds} />
      </PlaylistsContainer>
    );
  }
}
Playlists.propTypes = {
  playlists: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  { changeActivePlaylist }
)(Playlists);
