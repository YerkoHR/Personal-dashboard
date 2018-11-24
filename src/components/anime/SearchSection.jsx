import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataAnime } from "../../redux/ducks/fetchAnime";
import { fetchDetails } from "../../redux/ducks/animeDetails";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import styled from "styled-components";

const LoadableList = Loadable({
  loader: () => import("./SearchList"),
  loading: () => null,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

const StyledInput = styled.input`
  padding: 0.5em 1.2em;
  background: ${props => props.theme.backgroundPrimary};
  border-color: transparent;
  border-radius: 2px;
  color: ${props => props.theme.font};
  &:focus {
    outline: 0px;
  }
`;

const InputList = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1em 4em;
`;
const Space = styled.div`
  width: 30px;
  height: 30px;
`;
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
      <Container>
        <h1>Anilist API</h1>
        <InputContainer>
          <InputList>
            <StyledInput
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

          {loading && !error ? <div className="lds-dual-ring" /> : <Space />}

          {animeList.length < 1 && this.state.input !== "" && !loading && (
            <div>No results found.</div>
          )}
        </InputContainer>
      </Container>
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
  animeList: state.fetchAnime.anime,
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
