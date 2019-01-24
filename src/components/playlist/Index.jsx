import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import Loadable from "react-loadable";
import styled from "styled-components";
import { changeActivePlaylist } from "../../redux/ducks/playlists";
import Container from "../Container";
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
  display: grid;
  width: 90%;
  margin: 2em auto;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  grid-gap: 1em;
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { changeActivePlaylist, playlists } = this.props;

    return (
      <Container>
        <h2>Your current Playlists: </h2>
        <StyledUl>
          {Object.keys(playlists)
            .filter(key => key !== "active")
            .map(key => (
              <StyledLi onClick={() => changeActivePlaylist(key)}>
                <p>{key}</p>
                <ul>
                  {playlists[key].map(video => (
                    <li key={video.id}>{video.title}</li>
                  ))}
                </ul>
              </StyledLi>
            ))}
        </StyledUl>
      </Container>
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
  { changeActivePlaylist }
)(Index);
