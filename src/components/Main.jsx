import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataAnime } from "../redux/ducks/animeReducer";
import PropTypes from "prop-types";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchDataAnime(this.state.input);
  }
  render() {
    return (
      <div>
        <h2>Anilist API</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {this.props.animeList.error && (
          <p>Error with the API, try again later. </p>
        )}
        {this.props.animeList.anime && (
          <ul>
            {this.props.animeList.anime.map(anime => (
              <li key={anime.id}>{anime.title.romaji}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Main.propTypes = {
  fetchDataAnime: PropTypes.func.isRequired,
  animeList: PropTypes.shape({
    error: PropTypes.string,
    anime: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.shape({
          romaji: PropTypes.string.isRequired
        })
      })
    )
  })
};

function mapStateToProps(state) {
  return {
    animeList: state.animeReducer
  };
}

export default connect(
  mapStateToProps,
  {
    fetchDataAnime
  }
)(Main);
