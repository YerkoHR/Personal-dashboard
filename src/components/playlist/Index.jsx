import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import Loadable from "react-loadable";
import styled from "styled-components";
import { changeActivePlaylist } from "../../redux/ducks/playlists";
import Container from "../Container";
import { H2 } from "../globals";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  border-radius: 10px;
  min-height: 120px;
  border: 2px solid ${props => props.theme.border};
  transition: 0.3s ease-in;
  .pl-video {
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    .pl-video-name {
      width: 300px;
    }
  }
  &:hover {
    border-color: ${props => props.theme.P};
  }
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
  componentDidMount() {
    this.props.changeActivePlaylist("");
  }

  render() {
    const { changeActivePlaylist, playlists } = this.props;

    const keys = Object.keys(playlists).filter(key => key !== "active");
    const activeIds =
      playlists.active !== "" &&
      playlists[playlists.active].map(id => id.id).join(", ");
    return (
      <Container>
        {keys.length > 0 ? (
          <H2>Your current Playlists: </H2>
        ) : (
          <H2>You have no saved playlists :( </H2>
        )}
        <StyledUl>
          {keys.map(key => (
            <StyledLi key={key} onClick={() => changeActivePlaylist(key)}>
              <p>{key}</p>
              <ul>
                {playlists[key].map((video, i) => (
                  <li className="pl-video" key={video.id}>
                    <span>{i}</span>
                    <span className="pl-video-name">{video.title}</span>
                    <span>{video.duration}</span>
                  </li>
                ))}
              </ul>
            </StyledLi>
          ))}
        </StyledUl>
        {playlists.active !== "" && (
          <iframe
            type="text/html"
            title={playlists.active}
            src={`https://www.youtube.com/embed?listType=playlist&playlist=${activeIds}`}
          />
        )}
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
