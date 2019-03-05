import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { fetchDataAnime } from "../../../redux/ducks/fetchAnime";
import { fetchDetails } from "../../../redux/ducks/animeDetails";

import ContainerSearch from "../../../shared/ContainerSearch";
import { Input, H1 } from "../../../shared";
import { InputContainer, InputList } from "./styles";

const LoadableList = Loadable({
  loader: () => import("../Results"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

export class SearchSection extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value }, () => {
      this.props.fetchDataAnime(this.state.input);
    });
  }
  handleBlur(e) {
    if (!e.currentTarget.contains(document.activeElement)) {
      this.setState({ input: "" });
    }
  }

  render() {
    const { animeList, error, loading, fetchDetails } = this.props;

    return (
      <ContainerSearch>
        <H1>Anilist API</H1>
        <InputContainer>
          <InputList>
            <Input
              type="text"
              placeholder="Search an anime ..."
              onChange={this.handleChange}
              value={this.state.input}
            />

            {animeList.length > 0 && this.state.input !== "" && (
              <LoadableList
                data={animeList}
                fetchDetails={fetchDetails}
                blur={this.handleBlur}
              />
            )}
          </InputList>
          {error && <div>Error {error}, please try again later.</div>}

          {loading && !error ? <div className="lds-dual-ring" /> : <div />}

          {animeList.length < 1 && this.state.input !== "" && !loading && (
            <div>No results found.</div>
          )}
        </InputContainer>
      </ContainerSearch>
    );
  }
}

SearchSection.propTypes = {
  fetchDataAnime: PropTypes.func.isRequired,
  animeList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.number
};

const mapStateToProps = state => ({
  animeList: state.fetchAnime.results,
  error: state.fetchAnime.error,
  loading: state.fetchAnime.fetching
});

export default connect(
  mapStateToProps,
  {
    fetchDataAnime,
    fetchDetails
  }
)(SearchSection);
