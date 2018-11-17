import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataAnime, fetchDetails } from "../../redux/ducks/fetchAnime";
import { changeListMode } from "../../redux/ducks/modes";

import PropTypes from "prop-types";
import Loadable from "react-loadable";
import styled from "styled-components";

const LoadableTable = Loadable({
  loader: () => import("./SearchList"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const StyledInput = styled.input`
  padding: 0.5em 2em;
  background: ${props => props.theme.container};
  border-color: transparent;
  border-radius: 2px;
  color: ${props => props.theme.font};

  &:focus {
    outline: 0px;
  }
`;
const InputContainer = styled.div`
  position: relative;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 4em;
`;
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
    const {
      animeList,
      error,
      loading,
      changeListMode,
      listMode,
      fetchDetails
    } = this.props;

    return (
      <Container>
        <h1>Anilist API</h1>
        <InputContainer>
          <StyledInput
            type="text"
            placeholder="Search an anime ..."
            onChange={this.handleChange}
          />

          {error && <span>Error {error}, please try again later.</span>}

          {loading && !error && <span>Fetching...</span>}

          {animeList.length < 1 && this.state.input !== "" && !loading && (
            <span>No results found.</span>
          )}

          {animeList.length > 0 && listMode === "table" && (
            <LoadableTable data={animeList} fetchDetails={fetchDetails} />
          )}
        </InputContainer>
      </Container>
    );
  }
}

Main.propTypes = {
  fetchDataAnime: PropTypes.func.isRequired,
  changeListMode: PropTypes.func.isRequired,
  animeList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.number,
  listMode: PropTypes.oneOf(["table", "card"]),
  animeDetails: PropTypes.object
};

const mapStateToProps = state => ({
  animeList: state.fetchAnime.anime,
  error: state.fetchAnime.error,
  loading: state.fetchAnime.fetching,
  listMode: state.modes.listMode,
  animeDetails: state.fetchAnime.animeDetails
});

export default connect(
  mapStateToProps,
  {
    fetchDataAnime,
    changeListMode,
    fetchDetails
  }
)(Main);

/**
 * 
 *    TO ADD IN THE SAVED LIST !
 *         <button onClick={() => changeListMode("table")}>
            <span>Table</span>
          </button>
          <button onClick={() => changeListMode("card")}>
            <span>Card</span>
          </button>
 * 
 */
