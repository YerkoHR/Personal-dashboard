import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataAnime } from "../../redux/ducks/animeReducer";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import styled from "styled-components";

const LoadableList = Loadable({
  loader: () => import("./AnimeList"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const StyledMain = styled.div``;
const StyledInput = styled.div``;
const Conditional = styled.div``;
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value }, () => {
      this.props.fetchDataAnime(this.state.input);
    });
  }

  render() {
    const { animeList, error, loading } = this.props;

    return (
      <StyledMain>
        <h2>Anilist API</h2>
        <StyledInput>
          <input type="text" onChange={this.handleChange} />
        </StyledInput>
        <Conditional>
          {error && <p>Error {error}, please try again later.</p>}
          {loading && !error && <p>Fetching...</p>}
          {animeList.length < 1 &&
            this.state.input !== "" &&
            !loading && <p>No results found.</p>}
          {animeList.length > 0 && <LoadableList data={animeList} />}
        </Conditional>
      </StyledMain>
    );
  }
}

Main.propTypes = {
  fetchDataAnime: PropTypes.func.isRequired,
  animeList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        romaji: PropTypes.string.isRequired
      })
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.number
};

const mapStateToProps = state => ({
  animeList: state.animeReducer.anime,
  error: state.animeReducer.error,
  loading: state.animeReducer.fetching
});

export default connect(
  mapStateToProps,
  {
    fetchDataAnime
  }
)(Main);
