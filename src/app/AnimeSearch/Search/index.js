import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { fetchDataAnime } from "../../../redux/ducks/fetchAnime";
import { fetchDetails } from "../../../redux/ducks/animeDetails";

import ContainerSearch from "../../../shared/ContainerSearch";
import { Input, H1 } from "../../../shared/globals";
import { InputContainer, InputList } from "./styles";

const LoadableList = Loadable({
  loader: () => import("../Results"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const Search = ({
  animeList,
  error,
  loading,
  fetchDetails,
  fetchDataAnime
}) => {
  const [input, onInput] = useState("");

  const handleBlur = e => {
    if (!e.currentTarget.contains(document.activeElement)) {
      onInput("");
    }
  };
  async function fetch(input) {
    onInput(input);
    await fetchDataAnime(input);
  }

  return (
    <ContainerSearch>
      <H1>Anilist API</H1>
      <InputContainer>
        <InputList>
          <Input
            type="text"
            placeholder="Search an anime ..."
            onChange={e => fetch(e.target.value)}
            value={input}
          />

          {animeList.length > 0 && input !== "" && (
            <LoadableList
              data={animeList}
              fetchDetails={fetchDetails}
              blur={e => handleBlur(e)}
            />
          )}
        </InputList>
        {error && <div>Error {error}, please try again later.</div>}

        {loading && !error ? <div className="lds-dual-ring" /> : <div />}

        {animeList.length < 1 && input !== "" && !loading && (
          <div>No results found.</div>
        )}
      </InputContainer>
    </ContainerSearch>
  );
};

Search.propTypes = {
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
)(Search);
