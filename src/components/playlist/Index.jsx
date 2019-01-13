import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import Loadable from "react-loadable";
import styled from "styled-components";
import {
  createPlaylist,
  changeActivePlaylist
} from "../../redux/ducks/playlists";
/*
const LoadablePlaylist = Loadable({
  loader: () => import("./"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const Loadable = Loadable({
  loader: () => import("./"),
  loading: () => null
});
*/

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  width: 90%;
  margin: 2em auto;
  list-style: none;
  justify-content: space-evenly;
  padding: 0;
`;

const StyledLi = styled.li`
  padding: 2.5em 2em;
  border: 2px solid grey;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  render() {
    const { createPlaylist, changeActivePlaylist, playlists } = this.props;

    return (
      <div>
        <button onClick={() => createPlaylist("playlist1")}>
          Create Playlist
        </button>
        <StyledUl>
          {Object.keys(playlists)
            .filter(key => key !== "active")
            .map(key => (
              <StyledLi onClick={() => changeActivePlaylist(key)}>
                <p>{key}</p>

                <ul>
                  {playlists[key].map(id => (
                    <li>{id}</li>
                  ))}
                </ul>
              </StyledLi>
            ))}
          <StyledLi>
            <h3>Add Playlist</h3>
            <input type="text" />
          </StyledLi>
        </StyledUl>
      </div>
    );
  }
}
Index.propTypes = {
  playlists: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  playlists: state.playlists
});

export default connect(
  mapStateToProps,
  { createPlaylist, changeActivePlaylist }
)(Index);
