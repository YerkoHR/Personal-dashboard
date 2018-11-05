import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataAnime } from "../redux/ducks/animeReducer";
import PropTypes from "prop-types";
import AnimeList from "./AnimeList";

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
    return (
      <div>
        <h2>Anilist API</h2>
        <input type="text" onChange={this.handleChange} />
        {this.props.error && <p>Error with the API, try again later. </p>}
        <AnimeList data={this.props.animeList} />
      </div>
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
  )
};

mapStateToProps = state => ({
  animeList: state.animeReducer.anime,
  error: state.animeReducer.error
});

export default connect(
  mapStateToProps,
  {
    fetchDataAnime
  }
)(Main);
