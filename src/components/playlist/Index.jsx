import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import Loadable from "react-loadable";
import styled from "styled-components";
import { changeActivePlaylist } from "../../redux/ducks/playlists";
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
const Playlists = styled.div`
  margin: 2rem 0;
`;
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
  border-style: solid;
  border-width: 2px;
  border-color: ${props => (props.active ? props.theme.P : props.theme.border)};
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
const Player = styled.div`
  margin-top: 4rem;
  border-top: 2px solid ${props => props.theme.border};
  iframe {
    margin-top: 2rem;
    width: 900px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.border};
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
      <Playlists className="fade-in">
        {keys.length > 0 ? (
          <H2>Your current Playlists: </H2>
        ) : (
          <H2>You have no saved playlists :( </H2>
        )}
        <StyledUl>
          {keys.map(key => (
            <StyledLi
              active={key === playlists.active ? true : false}
              key={key}
              onClick={() => changeActivePlaylist(key)}
            >
              <p>{key}</p>
              <ul>
                {playlists[key].map((video, i) => (
                  <li className="pl-video" key={video.id}>
                    <span>{i + 1}</span>
                    <span className="pl-video-name">{video.title}</span>
                    <span>{video.duration}</span>
                  </li>
                ))}
              </ul>
            </StyledLi>
          ))}
        </StyledUl>
        {playlists.active !== "" && (
          <Player>
            <iframe
              type="text/html"
              title={playlists.active}
              src={`https://www.youtube.com/embed?listType=playlist&playlist=${activeIds}`}
            />
          </Player>
        )}
      </Playlists>
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
